// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Setup nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail as an example SMTP service
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password',  // Replace with your email password or use App Password for Gmail
  },
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,  // Sender's email
    to: 'recipient-email@gmail.com',  // Replace with the email where you want to receive messages
    subject: `New message from ${name}`,
    text: `You received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    return res.status(200).send('Message sent successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
