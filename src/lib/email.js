/**
 * Email Utility for Vercel Serverless
 */

import nodemailer from 'nodemailer';

let transporter = null;

const getTransporter = () => {
  if (transporter) return transporter;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn('Email credentials not configured');
    return null;
  }

  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  return transporter;
};

export async function sendEmail({ to, subject, html, text, from }) {
  const transport = getTransporter();

  if (!transport) {
    console.warn(`Email not sent (no transporter): ${subject} to ${to}`);
    if (process.env.NODE_ENV === 'development') {
      return { success: true, message: 'Email skipped (development mode)' };
    }
    throw new Error('Email service not configured');
  }

  const mailOptions = {
    from: from || `"College Tech - Univy" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text: text || html.replace(/<[^>]*>/g, ''),
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log(`Email sent: ${subject} to ${to}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Email failed: ${subject} to ${to} - ${error.message}`);
    throw error;
  }
}

export async function notifyAdmin(subject, html) {
  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `[Univy Admin] ${subject}`,
    html,
  });
}
