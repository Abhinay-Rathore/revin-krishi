const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const session = require('express-session');
const bodyParser = require("body-parser");
const path = require('path');
const favicon = require('serve-favicon');
// const { sequelize } = require('./models/database')
// sequelize.sync({ alter: true });
const app = express();
// app.set("view engine", "ejs");
app.use(express.static("../public"));
// app.use(passport.initialize());
// app.use(passport.session());
const SibApiV3Sdk = require('sib-api-v3-sdk');
app.set('views', path.join(__dirname, '../views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'ASecret Key',
  resave: false,
  saveUninitialized: true,
  // store: 'toanappropriateplace', 
  cookie: {
      maxAge: 3 * 60 * 60 * 24
  }
})) ;
// Start the server 

// for favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

const defaultClient = SibApiV3Sdk.ApiClient.instance;

var apiKey = defaultClient.authentications['api-key'];
const apiKey1 = process.env.API_KEY;
// create api key put  here from brevo
apiKey.apiKey = apiKey1;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'new_home.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'aboutus.html'));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'contact.html'));
});
app.get("/product1", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'product1.html'));
});
app.get("/product2", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'product2.html'));
});
app.get("/product3", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'product3.html'));
});

app.get("/usecases", (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'usecases.html'));
});
app.post("/send-mail", async (req, res) => {
  // Extract form data
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  // Extract checkbox values (interests)
  const interestsArray = req.body.interests;
  let interests = "Interest: ";
  if (Array.isArray(interestsArray)) {
      interests += interestsArray.join(", ");
  } else if (interestsArray) {
      interests += interestsArray; // if only one checkbox is checked
  } else {
      interests += "None"; // if no checkbox is checked
  }

  // Construct the email content
  const emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n${interests}\nMessage: ${message}`;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  const sender = {
      // mail from which api is created
      email: "digilshibu.satcard.iitpkd@gmail.com",
      name: "Revin",
  };
  const receiver = [
      {
          email: "connect@revinkrishi.com", // will be replaced by official Satcard email
      },
  ];

  try {
      await apiInstance.sendTransacEmail({
          sender,
          to: receiver,
          subject: "Contacted from Website",
          textContent: emailContent,
      });
      console.log("Email sent successfully");
      res.redirect("/contact");
  } catch (err) {
      console.error("Error sending email:", err);
      res.status(500).send("An error occurred while sending the email.");
  }
});

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});