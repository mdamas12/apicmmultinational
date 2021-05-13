const  transporter  = require("../config/mailer");


module.exports = {

    async send(req,res){

        let html_tempalte = `<div style="color:#000; padding: 20px; border: 1px solid #666; border-radius:10px"> 
                                <h3>Hi, they have contacted you from the website of cm multinational business</h3>
                                <p>His Name is : `+req.body.name+`</p>
                                <p>His Email is : `+req.body.email+`</p>
                                <p>His Phone is : `+req.body.phone+`</p>
                                <p>His message is : `+req.body.message+`</p>
                                <div><img style="width:200px" src="https://cmmultinationalbusiness.com/img/logo.png"  alt="CM Multinational"></div>
                             </div>`

    // send mail with defined transport object
        await transporter.sendMail({
            from: '"CM Multinational Business" <contact.cmmultinationalbusiness@gmail.com>', // sender address
            to: "marcosdamas12@gmail.com", // list of receivers 
            //bcc: "marcosdamas12@gmail.com",
            subject: "Contact from website", // Subject line
            text: "Email de contactenos", // plain text body
            html: html_tempalte,
        });
       //console.log(req.body);
       res.json("Mensaje enviado");
    }

}