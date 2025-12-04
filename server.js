// server.js
res.status(200).send("✅ Your message has been sent successfully!");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// ✅ Define schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ POST route to save contact
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).send("❌ All fields are required.");
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("📥 New message saved:", newContact);

    res.status(200).send("✅ Your message has been sent successfully!");
  } catch (error) {
    console.error("❌ Failed to save message:", error);
    res.status(500).send("❌ Error saving message.");
  }
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});


