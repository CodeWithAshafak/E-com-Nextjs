'use server'; 

import nodemailer from 'nodemailer';


export default async function Email (formData:FormData) {
  // const name = formData.get('name') as string;
  const email = formData.get('email') as string ;
  const otp=formData.get('otp')

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.KEY,
    },
  });

  try {
    await transporter.sendMail({
      from:"ashafak04@gmail.com",
      to: email, 
      subject: `OTP for LogIn`,
      text: ` Hello this is demo and this your otp ${otp} Thank You!`,
      replyTo: email,
    });
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}