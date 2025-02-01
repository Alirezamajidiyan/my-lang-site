// app/api/contact/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail or your SMTP service
      auth: {
        user: "alirezamajidiyan4@gmail.com", // Add your email in .env file
        pass: "alireza22", // Add your email password or App Password in .env file
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: "alirezadeveloperman@gmail.com", // Replace with the recipient's email address
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "An error occurred while sending your message.",
      }),
      { status: 500 }
    );
  }
}
