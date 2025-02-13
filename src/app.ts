import express from "express";
import cors from "cors";
import referralRoutes from "./referral/referral.routes";
import errorHandler from "./common/middleware/errorhandler.middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/referrals", referralRoutes);
app.use(errorHandler);

export default app;
