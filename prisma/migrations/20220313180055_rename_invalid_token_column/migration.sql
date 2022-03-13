/*
  Warnings:

  - You are about to drop the column `invaid_at` on the `InvalidTokens` table. All the data in the column will be lost.
  - Added the required column `expires_at` to the `InvalidTokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvalidTokens" DROP COLUMN "invaid_at",
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL;
