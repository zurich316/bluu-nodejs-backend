var express =require('express');
var nodemailer = require("nodemailer");
var companyEmail = require('../config/gmailAccount').emailCredentials;

var app = express();


//rutas
app.post('/',(req,res)=>{

    var body = req.body;

    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: companyEmail.user, // Cambialo por tu email
            pass: companyEmail.pass // Cambialo por tu password
        }    
    });

    var mailOption = {
        from: `"${companyEmail.name}" <${companyEmail.user}>`, // sender address
        to: `${body.email}`, // list of receivers
        subject: `${companyEmail.mantenermeAlTanto.subject}`, // Subject line
        text: `${companyEmail.mantenermeAlTanto.html}`, // plain text body
        html: `<p> ${body.name}, ${companyEmail.mantenermeAlTanto.html}` // html body
    };

    transporter.sendMail(mailOption,function(err,info){
        if (err){
            console.log(err);
            return res.status(500).json({
               ok:false,
               mensaje:"Error al mandar email",
               errors:err
           });
        }

        res.status(200).json({
            ok:true,
            messgae:'Mensaje funciona',
            body:formulario
        });

    });

    res.status(200).json({
        mensaje:"Mensaje correctamente",
        ok:true,
        resp:body
    });

});

module.exports = app;