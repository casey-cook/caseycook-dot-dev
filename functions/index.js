const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
	origin: true,
}); /**  * using gmail with nodemailer  */

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: { user: 'caseycookdev@gmail.com', pass: 'Qwertymnbvc12345.' },
});
exports.sendMail = functions.https.onRequest((req, res) => {
	cors(req, res, () => {
		const email = req.query.email;
		const name = req.query.name;
		const message = req.query.message;
		const mailOptions = {
			from: 'Casey Cook dot Dev',
			to: 'cook.caseya@gmail.com',
			subject: 'Contact Form Message',
			html:
				`<div>From:` +
				name +
				`<br /><br />Email: ` +
				email +
				`<br /><br />Message:` +
				message +
				`<br /><br /></div> `,
		};
		// returning result
		return transporter.sendMail(mailOptions, (erro, info) => {
			if (erro) {
				return res.send(erro.toString());
			}
			return res.send(
				'Thank you for your message! You can safely close this window.'
			);
		});
	});
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
