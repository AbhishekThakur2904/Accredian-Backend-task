import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { createReferral } from "./referral.service";
import sendEmail from "../common/services/email.service";

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
export const submitReferral = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const referral = await createReferral(req.body);

    await sendEmail(
      referral.referrerEmail,
      "Referral Submitted Successfully",
      `Hello ${referral.referrerName}, your referral for ${referral.refereeName} has been received.`
    );

    await sendEmail(
      referral.refereeEmail, 
      "You Have Been Referred!",
      `Hello ${referral.refereeName}, ${referral.referrerName} has referred you for the ${referral.course} course.`
    );

    res.status(201).json({
      message: "Referral submitted successfully and emails sent.",
      referral,
    });
  } catch (error) {
    next(error);
  }
};
