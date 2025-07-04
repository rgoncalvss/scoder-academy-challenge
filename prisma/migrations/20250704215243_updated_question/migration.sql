/*
  Warnings:

  - You are about to drop the column `description` on the `Question` table. All the data in the column will be lost.
  - Added the required column `correctAnswerIndex` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "description",
ADD COLUMN     "alternatives" TEXT[],
ADD COLUMN     "correctAnswerIndex" INTEGER NOT NULL;
