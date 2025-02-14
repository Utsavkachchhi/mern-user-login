const nodemailer = require('nodemailer');

const sendVerificationEmail = (email, token) => {
    
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
 
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        html: `Click on this link to verify your email: http://localhost:3000/verify-email?token=${token}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.error(err);
        else console.log(`Verification email sent to ${email}`);
    });
};

module.exports = sendVerificationEmail