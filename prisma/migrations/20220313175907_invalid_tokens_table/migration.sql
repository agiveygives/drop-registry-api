-- CreateTable
CREATE TABLE "InvalidTokens" (
    "id" SERIAL NOT NULL,
    "jwt" TEXT NOT NULL,
    "invaid_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvalidTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InvalidTokens_jwt_key" ON "InvalidTokens"("jwt");
