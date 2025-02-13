import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email using the configured transporter.
 * 
 * @param to - The recipient's email address.
 * @param subject - The subject of the email.
 * @param text - The text content of the email.
 * @returns A promise that resolves when the email has been sent.
 */

const sendEmail = async (to: string, subject: string, text: string) => {
  return await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
};

export default sendEmail;
