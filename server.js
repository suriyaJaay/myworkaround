const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4300;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/dropMail', (req, res)=> { 
  console.log("contents",req.body);  
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'amsuriya1989@gmail.com',
      pass: 'surya2k8',
    },
  });
  let message = {
    from: '"Demo", mailer@nodemailer.com',
    to: 'hi.jayasurya@gmail.com',
    subject: 'New Message From: ' + req.body.name,    
    text:
      'Name: ' +
      req.body.name +
      '\nEmail: ' +
      req.body.email +
      '\nPhone: ' +
      req.body.phone +
      '\n    ' +
      req.body.message,
    html:
      '<h4> Name: </h4>' +
      req.body.name +
      '<h4>Email: </h4>' +
      req.body.email +
      '<h4>Phone: </h4>' +
      req.body.phone +
      '<p>    ' +
      req.body.message +
      '</p>',
  };
  transporter.sendMail(message);
});
/*app.get('/downloadPDF', (req,res)=>{
  //let file = path.join(__dirname, 'test.pdf');
  res.download('./src/assets/test.pdf' , (err)=>{
    if(err){
      console.log("Error");
      console.log(err);
    }
  });
});*/
app.listen(port, function(req, res) {
  console.log('Server is running at port: ', port);
});