var http = require('http');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'service.rideasap@gmail.com',
    pass: 'wewilldoit:)'
  }
});

var mailOptions = {
  from: 'service.rideasap@gmail.com',
  to: 'shrutivatsaya@gmail.com',
  subject: 'Mail to the authority',
  text: 'your service has been updated .Thank you for using RideASAP.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});