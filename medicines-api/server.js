const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/medicinesdb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Định nghĩa Schema
const medicineSchema = new mongoose.Schema({
  name: String,
  price: String,
  star: String,
  description: String,
  image: String,
});

const Medicine = mongoose.model("Medicine", medicineSchema);

// API GET all medicines
app.get("/medicins", async (req, res) => {
  const data = await Medicine.find();
  res.json(data);
});

// API POST (thêm thuốc mới)
app.post("/medicins", async (req, res) => {
  const newMed = new Medicine(req.body);
  await newMed.save();
  res.json(newMed);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
