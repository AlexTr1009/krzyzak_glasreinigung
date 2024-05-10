import nodemailer from 'nodemailer';

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body

    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: 'youngceaser45@gmail.com',
            pass: 'Mag3nat6.',
        },
    });

    try {

        const mail = await transporter.sendMail({
            from: 'youngceaser45@gmail.com',
            to: "alex.traczyk@googlemail.com",
            replyTo: email,
            subject: `Kontaktanfrage von ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Nachricht: ${message}</p>
            `,
        })

        console.log("Nachricht gesendet:", mail.messageId);

        return res.status(200).json({ message: "success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Senden der Email ist fehlgeschlagen"
        });
    }
}

