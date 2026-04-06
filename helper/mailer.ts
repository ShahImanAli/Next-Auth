import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    const encodedToken = encodeURIComponent(hashedToken);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ff27a9fca095dc",
        pass: "56caa98c67ea20",
      },
    });

    const mailOptions = {
      from: "shahimanali@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your Email" : "Reset your Password",
      text:
        emailType === "VERIFY"
          ? `Click the link to verify your email: ${process.env.DOMAIN}/verifyemail?token=${encodedToken}`
          : `Click the link to reset your password: ${process.env.DOMAIN}/resetpassword?token=${encodedToken}`,
      html:
        emailType === "VERIFY"
          ? `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${encodedToken}">here</a> to verify your email</p>`
          : `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${encodedToken}">here</a> to reset your password</p>`,
      category: "Authentication",
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
