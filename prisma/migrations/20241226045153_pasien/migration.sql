/*
  Warnings:

  - Added the required column `idtransaksikeluar` to the `Obat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `obat` ADD COLUMN `idtransaksikeluar` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `TransaksiKeluar` (
    `id` VARCHAR(191) NOT NULL,
    `iduser` VARCHAR(191) NOT NULL,
    `idpasien` VARCHAR(191) NOT NULL,
    `tanggaltransaksi` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pasien` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `umur` VARCHAR(191) NOT NULL,
    `tanggallahir` DATETIME(3) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TransaksiKeluar` ADD CONSTRAINT `TransaksiKeluar_iduser_fkey` FOREIGN KEY (`iduser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiKeluar` ADD CONSTRAINT `TransaksiKeluar_idpasien_fkey` FOREIGN KEY (`idpasien`) REFERENCES `Pasien`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_idtransaksikeluar_fkey` FOREIGN KEY (`idtransaksikeluar`) REFERENCES `TransaksiKeluar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
