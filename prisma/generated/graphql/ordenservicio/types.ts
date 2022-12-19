
  import {gql} from 'apollo-server-micro'

  const OrdenServicioTypes = gql`
  type OrdenServicio{
    id: ID!,servicio: Servicio!,servicioId: Int!,tipoOrdenServicio: TipoOrdenServicio!,tipoOrdenServicioId: Int!,fechaCierreOrden: DateTime,descripcion: String,observacionTecnica: String,estado: Enum_Estado_Orden!,otrosCobros: Float,usuarioCreo: User!,userIdCreo: Int!,usuarioEjecuto: User!,userIdEjecuto: Int!,direccionNomenclaturaDestino: Nomenclatura,nomenclaturaIdDestino: Int,viaGeneradoraDestino: Int,prefijoViaGeneradoraDestino: String,numeroPlacaCasaDestino: Int,aptoCasaDestino: Int,infoAdicionalDestino: String,createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    ordenServicios:[OrdenServicio]
    ordenServicio(id:Int!):OrdenServicio
  }

  input OrdenServicioCreateInput{
    servicioId: Int!,tipoOrdenServicioId: Int!,fechaCierreOrden: DateTime,descripcion: String,observacionTecnica: String,estado: Enum_Estado_Orden!,otrosCobros: Float,userIdCreo: Int!,userIdEjecuto: Int!,nomenclaturaIdDestino: Int,viaGeneradoraDestino: Int,prefijoViaGeneradoraDestino: String,numeroPlacaCasaDestino: Int,aptoCasaDestino: Int,infoAdicionalDestino: String
  }

  input OrdenServicioWhereUniqueInput{
    id:String!
  }

  input OrdenServicioUpdateInput{
  servicioId: IntInput
tipoOrdenServicioId: IntInput
fechaCierreOrden: DateTimeInput
descripcion: StringInput
observacionTecnica: StringInput
estado: Enum_Estado_OrdenInput
otrosCobros: FloatInput
userIdCreo: IntInput
userIdEjecuto: IntInput
nomenclaturaIdDestino: IntInput
viaGeneradoraDestino: IntInput
prefijoViaGeneradoraDestino: StringInput
numeroPlacaCasaDestino: IntInput
aptoCasaDestino: IntInput
infoAdicionalDestino: StringInput
  }

  type Mutation {
  createOrdenServicio(data:OrdenServicioCreateInput):OrdenServicio

  updateOrdenServicio(where:OrdenServicioWhereUniqueInput!, data:OrdenServicioUpdateInput ):OrdenServicio

  deleteOrdenServicio(where: OrdenServicioWhereUniqueInput!):OrdenServicio

    }
  `
  export {OrdenServicioTypes}
    