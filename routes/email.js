import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

const MAIL_TO = process.env.MAIL_TO ?? "shafi.rplwork@gmail.com";
const MAIL_FROM = process.env.MAIL_FROM ?? MAIL_TO;

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escape user input before putting it in the HTML email body.
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

const field = (body, key, maxLength) => {
  const value = typeof body?.[key] === "string" ? body[key].trim() : "";
  return value.slice(0, maxLength);
};

router.post("/", async (req, res) => {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("SENDGRID_API_KEY is not set; cannot send contact email.");
    return res.status(500).json({ success: false, error: "Email is not configured" });
  }

  const name = field(req.body, "name", 200);
  const email = field(req.body, "email", 200);
  const company = field(req.body, "company", 200);
  const message = field(req.body, "message", 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ success: false, error: "Name, a valid email and a message are required" });
  }

  const html = `<p>New Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${escapeHtml(name)}</li>
      <li>Email: ${escapeHtml(email)}</li>
      <li>Company: ${escapeHtml(company)}</li>
    </ul>
    <h3>Message</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  const text = `New Contact Request\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;

  try {
    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: "Contact Request",
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

export default router;
