import express from "express";
import { submitReferral } from "./referral.controller";
import { referralValidationRules } from "./referral.validation";
import validateRequest from "../common/middleware/validation.middleware";

const router = express.Router();

router.post(
  "/submit",
  referralValidationRules,
  validateRequest,
  submitReferral
);

export default router;
