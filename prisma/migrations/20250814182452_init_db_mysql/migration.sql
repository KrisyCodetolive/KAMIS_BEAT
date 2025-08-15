-- CreateTable
CREATE TABLE `Instrumental` (
    `instruId` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `bpm` VARCHAR(191) NOT NULL,
    `gamme` VARCHAR(10) NOT NULL,
    `cover` VARCHAR(191) NULL,
    `url` VARCHAR(191) NOT NULL DEFAULT '/path/to/instru',
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Instrumental_title_key`(`title`),
    UNIQUE INDEX `Instrumental_cover_key`(`cover`),
    UNIQUE INDEX `Instrumental_url_key`(`url`),
    PRIMARY KEY (`instruId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AudioFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('MP3', 'ZIP') NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `instrumentalId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AudioFile_path_key`(`path`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AudioFile` ADD CONSTRAINT `AudioFile_instrumentalId_fkey` FOREIGN KEY (`instrumentalId`) REFERENCES `Instrumental`(`instruId`) ON DELETE CASCADE ON UPDATE CASCADE;
