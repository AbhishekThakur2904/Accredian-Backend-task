"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const referral_controller_1 = require("./referral.controller");
const referral_validation_1 = require("./referral.validation");
const validation_middleware_1 = __importDefault(require("../common/middleware/validation.middleware"));
const router = express_1.default.Router();
router.post("/submit", referral_validation_1.referralValidationRules, validation_middleware_1.default, referral_controller_1.submitReferral);
exports.default = router;
