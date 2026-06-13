const sendEmail = require('./api/send-email.js');

const req = {
  method: 'POST',
  body: {
    type: 'signup',
    userEmail: 'test@example.com'
  }
};

const res = {
  setHeader: () => {},
  status: (code) => {
    return {
      json: (data) => console.log("Status:", code, "Data:", data),
      end: () => console.log("Status:", code)
    };
  }
};

sendEmail(req, res).then(() => console.log("Done")).catch(err => console.error(err));
