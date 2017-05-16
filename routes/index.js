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

  transporter.sendMail(mail, (error, info) => {
    if (error) {
    	return res.send(error);
    }
    return res.send(info);
  });
});

module.exports = router;
