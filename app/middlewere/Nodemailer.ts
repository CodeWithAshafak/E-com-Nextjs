import nodemailer, { Transporter } from 'nodemailer'; 


require("dotenv").config();
const key = process.env.KEY as string;
const email_ad = process.env.USER as string;


const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: email_ad,
    pass: key
  }
});


transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready to send messages');
  }
});

export default transporter;

