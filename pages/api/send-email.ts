// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';
// // const nodemailer = require("nodemailer");

// // const transporter = nodemailer.createTransport({
// //   host: 'smtp.ionos.de',
// //   port: 587,
// //   secure: false,
// //   auth: {
// //       user: 'kontakt@fensterputzer-ob.de',
// //       pass: 'MakavalliJulian05+%',
// //   },
// // });

// const transporter = nodemailer.createTransport({
//   host: 'smtp.sendgrid.net',
//   port: 587,
//   // secure: true,
//   auth: {
//       user: 'apikey',
//       // pass: 'MakavalliJulian05+%',
//       pass: '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',
//   },
// });

// // const transporter = nodemailer.createTransport({
// //   host: "smtp.sendgrid.net",
// //   port: 587,
// //   auth: {
// //     api_key: "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",
// //   },
// // });


// export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {

//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     const mailOptions = {
//       from: email,
//       to: 'alex.traczyk@googlemail.com',
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ status: 'OK' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'ERROR' });
//     }
//   } else {
//     res.status(405).json({ status: 'METHOD_NOT_ALLOWED' });
//   }
// }


import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey('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')

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firma, name, email, phone, message } = req.body

  const content = {
    to: 'mail@fensterreinigung-ob.de',
    from: 'kontakt@fensterputzer-ob.de',
    subject: `Nachricht von ${name} über Website`,
    // text: message,
    text: 
    `Firma: ${firma}
    Name: ${name}
    Email: ${email}
    Telfon: ${phone}

    Nachricht: ${message}`
    
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Nachricht gesendet')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Fehler beim Senden der Nachricht')
  }
}

export default sendEmail
