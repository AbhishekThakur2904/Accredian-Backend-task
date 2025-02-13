/*
  Warnings:

  - A unique constraint covering the columns `[referrerEmail,refereeEmail,course]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Referral_referrerEmail_key` ON `referral`;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_referrerEmail_refereeEmail_course_key` ON `Referral`(`referrerEmail`, `refereeEmail`, `course`);
