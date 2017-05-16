var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'cesarodriguez4@gmail.com', 
		pass: 'Vcesar04!'
	}
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/email', (req, res) => {
  let mail = {
  	from: 'cesarodriguez4@gmail.com', 
  	to: req.body.email, 
  	subject: 'Ticket', 
  	text: 'Hola'
  };

  transporter.sendEmail(mail, (error, info) => {
    if (error) {
    	return console.log(error);
    }
    return console.log(info);
  });
});

module.exports = router;
