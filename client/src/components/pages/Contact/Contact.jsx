import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { API_BASE_URL } from "../../../config.js";
import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", company: "", message: "" };
const MESSAGES = {
  success: "Message Sent",
  error: "Sorry Something Went Wrong",
};

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  // Hide the success/error banner after 3 seconds; the cleanup cancels the timer on unmount.
  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE_URL}/api/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setFormData(EMPTY_FORM);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const alert =
    status === "success" ? (
      <p className="alert" role="status">{MESSAGES.success}</p>
    ) : status === "error" ? (
      <p className="alert negative_alert" role="alert">{MESSAGES.error}</p>
    ) : null;

  const { name, email, company, message } = formData;
  return (
    <div className="Contact">
      <Container>
        {alert}
        <h1 className="title">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputName">Name</label>
            <input
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="InputName"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address</label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="InputEmail"
              placeholder="Your Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputCompany">Company</label>
            <input
              name="company"
              value={company}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="InputCompany"
              placeholder="Your Company"
              autoComplete="organization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputMessage">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              className="form-control"
              id="InputMessage"
              rows="10"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
          </button>
        </form>
        {alert}
      </Container>
    </div>
  );
};

export default Contact;
