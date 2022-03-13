-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDetails" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "invalid_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registry" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "invite_code" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "Registry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistryDetails" (
    "id" SERIAL NOT NULL,
    "registry_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "invalid_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegistryDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gift" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "registry_id" INTEGER NOT NULL,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GiftDetails" (
    "id" SERIAL NOT NULL,
    "gift_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost_estimate" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "purchased_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "invalid_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GiftDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserDetails" ADD CONSTRAINT "UserDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registry" ADD CONSTRAINT "Registry_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistryDetails" ADD CONSTRAINT "RegistryDetails_registry_id_fkey" FOREIGN KEY ("registry_id") REFERENCES "Registry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_registry_id_fkey" FOREIGN KEY ("registry_id") REFERENCES "Registry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftDetails" ADD CONSTRAINT "GiftDetails_purchased_by_fkey" FOREIGN KEY ("purchased_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftDetails" ADD CONSTRAINT "GiftDetails_gift_id_fkey" FOREIGN KEY ("gift_id") REFERENCES "Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
