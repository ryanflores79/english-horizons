require("dotenv").config();
const nodemailer = require("nodemailer");

const contact = (req, res) => {
  const body = JSON.parse(req.body);
  const { name, company, email, phone, message, hear } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    Name: ${name}
    Company: ${company}
    Email: ${email}
    Phone: ${phone}
    How did you hear about us: ${hear}

    Message:
    ${message}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail send");
    }
  });

  console.log(name, email, message);
  res.send("success");
};

export default contact;
