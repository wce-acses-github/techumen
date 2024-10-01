import express from "express";
import contactController from "../controllers/contact.controller.js";

const router = express.Router();

// POST route for the contact form
router.post("/contact", (req, res) => {
    console.log("POST request received for /contact");
    contactController.contactUs(req, res);
});

export default router;
