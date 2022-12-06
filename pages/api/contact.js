const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContactMail = async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Company: ${body.company}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    How did you hear about us?: ${body.hear}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: process.env.TO_EMAIL,
    from: process.env.CONTACT_EMAIL,
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};

export default sendContactMail;
