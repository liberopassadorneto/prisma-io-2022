/*
  Warnings:

  - You are about to drop the column `fk_teacher_id` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_teacher_id_fkey";

-- DropIndex
DROP INDEX "courses_fk_teacher_id_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "fk_teacher_id";
