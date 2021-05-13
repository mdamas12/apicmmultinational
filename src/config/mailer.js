
//const nodemailer = require('nodemailer');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'contact.cmmultinationalbusiness@gmail.com',
        pass: 'pqprdtsraphtkrsn',
    },

});

transporter.verify().then(()=>{
    console.log("ready send email");
});

module.exports = transporter;