/*
  Warnings:

  - You are about to drop the column `userId` on the `Skin` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - Added the required column `correctAnsewrs` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Skin" DROP CONSTRAINT "Skin_userId_fkey";

-- DropIndex
DROP INDEX "User_email_idx";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Skin" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "balance",
DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "status",
ADD COLUMN     "correctAnsewrs" INTEGER NOT NULL;
