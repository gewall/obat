/*
  Warnings:

  - You are about to drop the column `idtransaksikeluar` on the `obat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `obat` DROP FOREIGN KEY `Obat_idtransaksikeluar_fkey`;

-- DropIndex
DROP INDEX `Obat_idtransaksikeluar_fkey` ON `obat`;

-- AlterTable
ALTER TABLE `obat` DROP COLUMN `idtransaksikeluar`;

-- CreateTable
CREATE TABLE `ObatKeluar` (
    `id` VARCHAR(191) NOT NULL,
    `idtransaksi` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `satuan` VARCHAR(191) NOT NULL,
    `kuantiti` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ObatKeluar` ADD CONSTRAINT `ObatKeluar_idtransaksi_fkey` FOREIGN KEY (`idtransaksi`) REFERENCES `TransaksiKeluar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
