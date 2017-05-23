const sql = require('sql-crud');
let crud = new sql('mysql');
module.exports = (app, con) => {
	app.post('/login', (req, res) => {
		const nombre = req.body.nombre;
		const password = req.body.password;
		crud.select(con, {
			select: '*',
			from: 'USUARIOS',
			where: {nombre, password}
		}, (error, result) => {
			if (error) {
				res.send(error);
			}
			if(result.length > 0) {
				res.send({success: true});
			}
			else {
				res.send({error: 'Password y usuario incorrectos'});
			}
		}, true);
	});
}