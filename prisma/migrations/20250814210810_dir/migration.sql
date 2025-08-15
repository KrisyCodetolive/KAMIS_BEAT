/*
  Warnings:

  - A unique constraint covering the columns `[directory]` on the table `Instrumental` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `directory` to the `Instrumental` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Instrumental` ADD COLUMN `directory` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Instrumental_directory_key` ON `Instrumental`(`directory`);
