-- DropForeignKey
ALTER TABLE "GiftDetails" DROP CONSTRAINT "GiftDetails_purchased_by_fkey";

-- AlterTable
ALTER TABLE "GiftDetails" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "cost_estimate" DROP NOT NULL,
ALTER COLUMN "purchased_by" DROP NOT NULL,
ALTER COLUMN "invalid_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RegistryDetails" ALTER COLUMN "invalid_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserDetails" ALTER COLUMN "invalid_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GiftDetails" ADD CONSTRAINT "GiftDetails_purchased_by_fkey" FOREIGN KEY ("purchased_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
