"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const referral_routes_1 = __importDefault(require("./referral/referral.routes"));
const errorhandler_middleware_1 = __importDefault(require("./common/middleware/errorhandler.middleware"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/referrals", referral_routes_1.default);
app.use(errorhandler_middleware_1.default);
exports.default = app;
