const nodemailer = require('nodemailer');

exports.sendEmail = async (text) => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: <Email user>,
      pass: <Email password>
    }
  });
  const message = {
    from: <Email>,
    to: <Email>,
    subject: 'Weekly database backup',
    text: text
  };

 await transport.sendMail(message);

}
