import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, otp, url) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your CodeSlayer Account",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Verification Required</h2>
          <p>Your verification code is: <b style="font-size: 18px;">${otp}</b></p>
          <p>Or click the link below to verify automatically:</p>
          <a href="${url}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Account</a>
          <p>This code expires in 1 hour.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
};