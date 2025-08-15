/*
  Warnings:

  - The values [MP3,ZIP] on the enum `AudioFile_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `AudioFile` MODIFY `type` ENUM('mp3', 'zip') NOT NULL;
