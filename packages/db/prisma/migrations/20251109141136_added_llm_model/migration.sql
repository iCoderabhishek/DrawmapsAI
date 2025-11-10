-- CreateTable
CREATE TABLE "LLMResponse" (
    "id" SERIAL NOT NULL,
    "response" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "LLMResponse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LLMResponse" ADD CONSTRAINT "LLMResponse_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LLMResponse" ADD CONSTRAINT "LLMResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
