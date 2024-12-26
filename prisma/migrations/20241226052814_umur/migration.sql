/*
  Warnings:

  - You are about to alter the column `umur` on the `pasien` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `pasien` MODIFY `umur` INTEGER NOT NULL;
