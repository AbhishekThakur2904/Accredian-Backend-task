import { body } from "express-validator";

export const referralValidationRules = [
  body("referrerName").notEmpty().withMessage("Referrer Name is required"),
  body("referrerEmail")
    .isEmail()
    .withMessage("Valid referrer email is required"),
  body("refereeName").notEmpty().withMessage("Referee Name is required"),
  body("refereeEmail").isEmail().withMessage("Valid referee email is required"),
  body("course").notEmpty().withMessage("Course is required"),
];
