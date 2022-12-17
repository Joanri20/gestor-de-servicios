-- CreateEnum
CREATE TYPE "Enum_TipoDocumento" AS ENUM ('CEDULA_CIUDADANIA', 'CEDULA_EXTRANJERIA', 'PASAPORTE', 'TARJETA_IDENTIDAD', 'NIT');

-- CreateEnum
CREATE TYPE "Enum_Estado_User" AS ENUM ('ACTIVO', 'INACTIVO');

-- CreateEnum
CREATE TYPE "Enum_Estado_Servicio" AS ENUM ('ACTIVO', 'SUSPENDIDO', 'RETIRADO');

-- CreateEnum
CREATE TYPE "Enum_Poblacion" AS ENUM ('URBANO', 'RURAL');

-- CreateEnum
CREATE TYPE "Enum_Estado_Civil" AS ENUM ('SOLTERO_A', 'CASADO_A', 'VIUDO_A', 'UNION_LIBRE', 'DIVORCIADO_A');

-- CreateEnum
CREATE TYPE "Enum_Via_Sector" AS ENUM ('CALLE', 'CARRERA', 'TORRE', 'BLOQUE', 'VEREDA', 'SECTOR', 'VIA', 'DIAGONAL', 'TRANSVERSAL');

-- CreateEnum
CREATE TYPE "Enum_Genero" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- CreateEnum
CREATE TYPE "Enum_Tipo_Propiedad" AS ENUM ('RESIDENCIAL', 'COMERCIAL');

-- CreateEnum
CREATE TYPE "Enum_Tipo_Servicio" AS ENUM ('TELEVISION', 'INTERNET');

-- CreateEnum
CREATE TYPE "Enum_Estado_Orden" AS ENUM ('ACTIVO', 'FINALIZADO', 'SUSPENDIDO', 'CANCELADO', 'EN_PROCESO');

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nomenclatura" (
    "id" SERIAL NOT NULL,
    "via" "Enum_Via_Sector" NOT NULL,
    "numero" INTEGER NOT NULL,
    "prefijo" TEXT NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "Nomenclatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "cargo" TEXT,
    "especialidad" TEXT,
    "caja" INTEGER,
    "tipoDocumento" "Enum_TipoDocumento" NOT NULL,
    "documento" TEXT NOT NULL,
    "nomenclaturaId" INTEGER NOT NULL,
    "viaGeneradora" TEXT NOT NULL,
    "prefijoViaGeneradora" TEXT NOT NULL,
    "numeroPlacaCasa" TEXT NOT NULL,
    "telefono" TEXT,
    "correo" TEXT,
    "estadoCivil" "Enum_Estado_Civil",
    "estrato" INTEGER,
    "genero" "Enum_Genero",
    "estado" "Enum_Estado_User" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "tipoDocumento" "Enum_TipoDocumento" NOT NULL,
    "documento" TEXT NOT NULL,
    "fechaExpedicion" TIMESTAMP(3) NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "telefono" TEXT,
    "correo" TEXT,
    "estadoCivil" "Enum_Estado_Civil",
    "estrato" INTEGER,
    "genero" "Enum_Genero",
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "tipoServicio" "Enum_Tipo_Servicio" NOT NULL,
    "planId" INTEGER NOT NULL,
    "nomenclaturaId" INTEGER NOT NULL,
    "viaGeneradora" INTEGER NOT NULL,
    "prefijoViaGeneradora" TEXT NOT NULL,
    "numeroPlacaCasa" INTEGER NOT NULL,
    "aptoCasa" INTEGER,
    "infoAdicional" TEXT,
    "estado" "Enum_Estado_Servicio" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipoServicio" "Enum_Tipo_Servicio" NOT NULL,
    "tipoPropiedad" "Enum_Tipo_Propiedad" NOT NULL,
    "poblacion" "Enum_Poblacion" NOT NULL,
    "tarifa" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenServicio" (
    "id" SERIAL NOT NULL,
    "servicioId" INTEGER NOT NULL,
    "tipoOrdenServicioId" INTEGER NOT NULL,
    "fechaCierreOrden" TIMESTAMP(3),
    "descripcion" TEXT,
    "observacionTecnica" TEXT,
    "estado" "Enum_Estado_Orden" NOT NULL,
    "otrosCobros" DOUBLE PRECISION,
    "userIdCreo" INTEGER NOT NULL,
    "userIdEjecuto" INTEGER NOT NULL,
    "nomenclaturaIdDestino" INTEGER,
    "viaGeneradoraDestino" INTEGER,
    "prefijoViaGeneradoraDestino" TEXT,
    "numeroPlacaCasaDestino" INTEGER,
    "aptoCasaDestino" INTEGER,
    "infoAdicionalDestino" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrdenServicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoOrdenServicio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipoServicio" "Enum_Tipo_Servicio" NOT NULL,
    "costo" DOUBLE PRECISION,

    CONSTRAINT "TipoOrdenServicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Nomenclatura_nombre_key" ON "Nomenclatura"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "User_tipoDocumento_documento_key" ON "User"("tipoDocumento", "documento");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_tipoDocumento_documento_key" ON "Cliente"("tipoDocumento", "documento");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_descripcion_tipoPropiedad_tipoServicio_poblacion_tarif_key" ON "Plan"("descripcion", "tipoPropiedad", "tipoServicio", "poblacion", "tarifa");

-- CreateIndex
CREATE UNIQUE INDEX "TipoOrdenServicio_tipoServicio_nombre_key" ON "TipoOrdenServicio"("tipoServicio", "nombre");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nomenclaturaId_fkey" FOREIGN KEY ("nomenclaturaId") REFERENCES "Nomenclatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_nomenclaturaId_fkey" FOREIGN KEY ("nomenclaturaId") REFERENCES "Nomenclatura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenServicio" ADD CONSTRAINT "OrdenServicio_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenServicio" ADD CONSTRAINT "OrdenServicio_tipoOrdenServicioId_fkey" FOREIGN KEY ("tipoOrdenServicioId") REFERENCES "TipoOrdenServicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenServicio" ADD CONSTRAINT "OrdenServicio_userIdCreo_fkey" FOREIGN KEY ("userIdCreo") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenServicio" ADD CONSTRAINT "OrdenServicio_userIdEjecuto_fkey" FOREIGN KEY ("userIdEjecuto") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenServicio" ADD CONSTRAINT "OrdenServicio_nomenclaturaIdDestino_fkey" FOREIGN KEY ("nomenclaturaIdDestino") REFERENCES "Nomenclatura"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
