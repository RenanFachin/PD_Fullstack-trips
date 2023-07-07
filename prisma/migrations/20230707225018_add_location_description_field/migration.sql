/*
  Warnings:

  - Added the required column `locationDescription` to the `trips` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trips" ADD COLUMN     "locationDescription" TEXT NOT NULL;
