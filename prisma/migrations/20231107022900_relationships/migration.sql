-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Dealer" ADD CONSTRAINT "Dealer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
