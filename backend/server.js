// // server.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const authRoutes = require('./routes/authRoutes');
// const loginRoutes = require('./routes');
// require('dotenv').config();

// const localListsRoutes = require('./routes/localListsRoutes');
// const partyListsRoutes = require('./routes/partyListsRoutes');
// const electoralDistrictsRoute = require('./routes/electoralDistricts');
// app.use('/api', loginRoutes);
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/local-lists', localListsRoutes);
// app.use('/api/party-lists', partyListsRoutes);
// app.use('/api', electoralDistrictsRoute);

// const PORT = process.env.PORT || 4003;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//////////////////////////////////

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
// const localListsRoutes = require('./routes/localListsRoutes');
// const partyListsRoutes = require('./routes/partyListsRoutes');
// const electoralDistrictsRoute = require('./routes/electoralDistricts');
// const userAuthRoutes = require('./routes/userAuthRoutes'); // Adjust path as necessary

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/local-lists', localListsRoutes);
// app.use('/api/party-lists', partyListsRoutes);
// app.use('/api/electoral-districts', electoralDistrictsRoute); // Adjusted endpoint
// app.use('/api/userAuth', userAuthRoutes);

// const PORT = process.env.PORT || 4003;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

////////////////////////work//////////////////

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const authRoutes = require("./routes/authRoutes");
// const localListsRoutes = require("./routes/localListsRoutes");
// const partyListsRoutes = require("./routes/partyListsRoutes");
// const electoralDistrictsRoute = require("./routes/electoralDistricts");
// const userAuthRoutes = require("./routes/userAuthRoutes"); // Adjust path as necessary
// const requestsRoutes = require("./routes/requestsRoutes");
// const routerVotingCircle = require("./routes/routerVotingCircle");
// const routerVotingparty = require("./routes/routingPartylist");
// const adsRoutes = require('./routes/adsRoutes');
// const resultRouter = require('./routes/resulRouter')

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // Ensures the server can parse JSON payloads
// app.use(express.json()); // Handles JSON payloads

// // Routes
// app.use("/api/auth", authRoutes);

// app.use("/api/local-lists", localListsRoutes);

// app.use("/api/party-lists", partyListsRoutes);
// app.use("/api/electoral-districts", electoralDistrictsRoute); // Adjusted endpoint
// app.use("/api/userAuth", userAuthRoutes); // Ensure this path matches your routes
// app.use("/api/requests", requestsRoutes);

// app.use('/api', adsRoutes);

// //routes tasneem
// app.use("/api/voting", routerVotingCircle);
// app.use("/", routerVotingparty);
// app.use('/', resultRouter);

// // striiiiiiiiiiiiiiiiiiip

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount, currency } = req.body;

//   if (!amount || isNaN(amount) || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//     });

//     await db("payments").insert({
//       stripe_payment_id: paymentIntent.id,
//       amount,
//       currency,
//       status: paymentIntent.status,
//     });

//     res.json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });
// // -------------------------------------------------------

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// const PORT = process.env.PORT || 4003;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

///////////////////////////////////////now

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const knex = require("knex");
const knexConfig = require("./knexfile"); // استيراد ملف التكوين

// إعداد الاتصال بقاعدة البيانات
const db = knex(knexConfig.development);
const authRoutes = require("./routes/authRoutes");
const localListsRoutes = require("./routes/localListsRoutes");
const partyListsRoutes = require("./routes/partyListsRoutes");
const electoralDistrictsRoute = require("./routes/electoralDistricts");
const userAuthRoutes = require("./routes/userAuthRoutes");
const requestsRoutes = require("./routes/requestsRoutes");
// tasneem

const routerVotingCircle = require("./routes/routerVotingCircle");
const routerVotingparty = require("./routes/routingPartylist");
const resultRouter = require("./routes/resulRouter");
const resultPartyrouter = require("./routes/resultPartyrouter");

// end tasneem

// const chatRoutes = require('./routes/chatRouter')

// areej
const electionRoutes = require("./routes/statsRoutes.js");

const adsRoutes = require("./routes/adsRoutes");
const debateRoutes = require("./routes/debateRoutes"); // New import for debate routes

const chatRoutes = require("./routes/chatRouter");

const payments = require("./routes/paymentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

console.log("11");
app.use("/api", resultPartyrouter);
console.log("21");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/local-lists", localListsRoutes);
app.use("/api/party-lists", partyListsRoutes);
app.use("/api/electoral-districts", electoralDistrictsRoute);
app.use("/api/userAuth", userAuthRoutes);
app.use("/api/requests", requestsRoutes);
app.use("/api", adsRoutes);

// tasneem Routes
app.use("/api/voting", routerVotingCircle);
app.use("/", routerVotingparty);
app.use("/", resultRouter);
// end tasneem Routes
app.use("/api/debates", debateRoutes); // New route for debates
// Stripe configuration

// app.use('/api/chat', chatRoutes);

app.use("/api/over", electionRoutes);

// app.use('/payments', paymentRoutes);

app.use("/api/chat", chatRoutes);
app.use("/payments", payments);

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount, currency } = req.body;

//   if (!amount || isNaN(amount) || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//     });

//     await db("payments").insert({
//       stripe_payment_id: paymentIntent.id,
//       amount,
//       currency,
//       status: paymentIntent.status,
//     });

//     res.json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// app.post("/create-payment-intent", async (req, res) => {
//   const { amount, currency } = req.body;

//   if (!amount || isNaN(amount) || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//     });

//     await db("payments").insert({
//       stripe_payment_id: paymentIntent.id,
//       amount,
//       currency,
//       status: paymentIntent.status,
//     });

//     res.json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// نقطة النهاية للتحقق من الأرقام الوطنية
app.post("/check-candidates", async (req, res) => {
  const { candidate1_id, candidate2_id } = req.body;

  try {
    const candidates = await db("users").whereIn("national_id", [
      candidate1_id,
      candidate2_id,
    ]);

    const valid = candidates.length === 2;
    res.json({ valid });
  } catch (error) {
    console.error("Error checking candidates:", error.message);
    res.status(500).json({ valid: false });
  }
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//TasneemTest1234@
