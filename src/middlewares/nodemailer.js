import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS  // Use environment variable
    }
});

const sendEmail = async (name, email) => {
    // Email content
    let mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: email, // Recipient address
        subject: 'Application Submitted Successfully', // Subject line
        text: `Dear ${name},\n\nThank you for submitting your application. We will review it shortly.\n\nRegards,\nEasily!`
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.log('Error occurred while sending email:', error);
    }
};

const emailMiddleware = (req, res, next) => {
    const { name, email } = req.body;
    sendEmail(name, email).then(() => {
        next();
    }).catch((error) => {
        console.log('Error in email middleware:', error);
        next();
    });
};

export default emailMiddleware;
