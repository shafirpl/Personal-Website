import { Router } from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const resumePath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "Resume.pdf");

const router = Router();

router.get("/", (req, res) => {
  res.download(resumePath);
});

export default router;
