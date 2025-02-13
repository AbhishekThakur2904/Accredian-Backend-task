/*
  Warnings:

  - A unique constraint covering the columns `[referrerEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Referral_referrerEmail_key` ON `Referral`(`referrerEmail`);
