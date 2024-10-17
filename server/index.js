import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.conf.js";
import authRoutes from './routes/authRoutes.js'
import patientRoutes from "./routes/patientRoutes.js"
import authorizationRoutes from './routes/authorizationRoutes.js'
dotenv.config();

connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
    methods: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use('/patients', patientRoutes);
app.use('/authorizations', authorizationRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
