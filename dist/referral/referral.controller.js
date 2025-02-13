"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitReferral = void 0;
const express_validator_1 = require("express-validator");
const referral_service_1 = require("./referral.service");
const email_service_1 = __importDefault(require("../common/services/email.service"));
/**
 * Submits a referral and sends an email to both the referrer and the referee,
 *    with a success message and the details of the referral.
 * @param req - The Express request object.
 * @param res - The Express response object.
 * @param next - The Express next function.
 * @returns A promise that resolves to nothing.
 * @throws An error if there is a problem submitting the referral or sending
 *    the email.
 */
const submitReferral = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const referral = yield (0, referral_service_1.createReferral)(req.body);
        yield (0, email_service_1.default)(referral.referrerEmail, "Referral Submitted Successfully", `Hello ${referral.referrerName}, your referral for ${referral.refereeName} has been received.`);
        yield (0, email_service_1.default)(referral.refereeEmail, "You Have Been Referred!", `Hello ${referral.refereeName}, ${referral.referrerName} has referred you for the ${referral.course} course.`);
        res.status(201).json({
            message: "Referral submitted successfully and emails sent.",
            referral,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.submitReferral = submitReferral;
