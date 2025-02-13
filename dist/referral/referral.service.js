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
exports.createReferral = void 0;
const db_service_1 = __importDefault(require("../common/services/db.service"));
/**
 * Creates a referral if one does not already exist with the same referrerEmail, refereeEmail, and course.
 * @throws {Error} If a referral already exists with the same referrerEmail, refereeEmail, and course.
 * @returns The newly created referral.
 */
const createReferral = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const existingReferral = yield db_service_1.default.referral.findFirst({
        where: {
            referrerEmail: data.referrerEmail,
            refereeEmail: data.refereeEmail,
            course: data.course,
        },
    });
    if (existingReferral) {
        throw new Error("You have already referred this person for the same course.");
    }
    return yield db_service_1.default.referral.create({ data });
});
exports.createReferral = createReferral;
