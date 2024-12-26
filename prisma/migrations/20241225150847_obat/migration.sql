-- CreateTable
CREATE TABLE `TransaksiMasuk` (
    `id` VARCHAR(191) NOT NULL,
    `iduser` VARCHAR(191) NOT NULL,
    `tanggaltransaksi` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Obat` (
    `id` VARCHAR(191) NOT NULL,
    `idtransaksi` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `satuan` VARCHAR(191) NOT NULL,
    `kuantiti` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TransaksiMasuk` ADD CONSTRAINT `TransaksiMasuk_iduser_fkey` FOREIGN KEY (`iduser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obat` ADD CONSTRAINT `Obat_idtransaksi_fkey` FOREIGN KEY (`idtransaksi`) REFERENCES `TransaksiMasuk`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
