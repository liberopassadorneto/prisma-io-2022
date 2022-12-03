-- CreateTable
CREATE TABLE "courses_modules" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fk_course_id" TEXT NOT NULL,
    "fk_module_id" TEXT NOT NULL,

    CONSTRAINT "courses_modules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_fk_course_id_fkey" FOREIGN KEY ("fk_course_id") REFERENCES "courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses_modules" ADD CONSTRAINT "courses_modules_fk_module_id_fkey" FOREIGN KEY ("fk_module_id") REFERENCES "modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
