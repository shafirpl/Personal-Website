import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import emailRoute from "./routes/email.js";
import resumeRoute from "./routes/resume.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, "client", "build");
const PORT = Number(process.env.PORT) || 80;

const app = express();

app.use(express.json({ limit: "20kb" }));

app.use("/api/email", emailRoute);
app.use("/api/resume", resumeRoute);

app.use(express.static(buildDir));
// Single-page app fallback: let the client router handle every other path.
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
