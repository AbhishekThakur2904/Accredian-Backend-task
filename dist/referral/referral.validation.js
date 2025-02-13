"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralValidationRules = void 0;
const express_validator_1 = require("express-validator");
exports.referralValidationRules = [
    (0, express_validator_1.body)("referrerName").notEmpty().withMessage("Referrer Name is required"),
    (0, express_validator_1.body)("referrerEmail")
        .isEmail()
        .withMessage("Valid referrer email is required"),
    (0, express_validator_1.body)("refereeName").notEmpty().withMessage("Referee Name is required"),
    (0, express_validator_1.body)("refereeEmail").isEmail().withMessage("Valid referee email is required"),
    (0, express_validator_1.body)("course").notEmpty().withMessage("Course is required"),
];
