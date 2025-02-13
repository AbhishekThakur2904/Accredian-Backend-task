import prisma from "../common/services/db.service";

/**
 * Creates a referral if one does not already exist with the same referrerEmail, refereeEmail, and course.
 * @throws {Error} If a referral already exists with the same referrerEmail, refereeEmail, and course.
 * @returns The newly created referral.
 */
export const createReferral = async (data: {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  course: string;
}) => {
  const existingReferral = await prisma.referral.findFirst({
    where: {
      referrerEmail: data.referrerEmail,
      refereeEmail: data.refereeEmail,
      course: data.course,
    },
  });

  if (existingReferral) {
    throw new Error(
      "You have already referred this person for the same course."
    );
  }

  return await prisma.referral.create({ data });
};
