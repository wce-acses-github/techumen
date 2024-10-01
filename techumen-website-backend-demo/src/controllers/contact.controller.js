import nodemailer from "nodemailer";

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.ORGANIZATION_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Utility function to send emails
const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.ORGANIZATION_EMAIL,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(`Error sending email to ${to}:`, error);
        throw error;
    }
};

// Controller for the contact form submission
const contactUs = async (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received Contact Us request:", { name, email, message });

    // Validate fields
    if (!name || !email || !message) {
        console.error("Validation error: All fields are required");
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Send a thank you email to the user
        await sendEmail(
            email,
            "Thank you for contacting us!",
            `Hi ${name},\n\nThank you for reaching out to us. We appreciate your interest and will get back to you shortly.\n\nBest regards,\nYour Organization`
        );

        console.log(`Thank you email sent to ${email}`);

        // Forward the user's message to the organization email
        await sendEmail(
            process.env.ORGANIZATION_EMAIL,
            `New Contact Us Message from ${name}`,
            `You have received a new message from your website's Contact Us form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        );

        console.log(`User's message forwarded to organization email`);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending message" });
    }
};

export default { contactUs };
