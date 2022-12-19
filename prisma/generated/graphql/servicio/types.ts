
  import {gql} from 'apollo-server-micro'

  const ServicioTypes = gql`
  type Servicio{
    id: ID!,cliente: Cliente!,clienteId: Int!,tipoServicio: Enum_Tipo_Servicio!,plan: Plan!,planId: Int!,direccionNomenclatura: Nomenclatura!,nomenclaturaId: Int!,viaGeneradora: Int!,prefijoViaGeneradora: String!,numeroPlacaCasa: Int!,aptoCasa: Int,infoAdicional: String,estado: Enum_Estado_Servicio!,user: User!,userId: Int!,ordenServicios: [OrdenServicio],createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    servicios:[Servicio]
    servicio(id:Int!):Servicio
  }

  input ServicioCreateInput{
    clienteId: Int!,tipoServicio: Enum_Tipo_Servicio!,planId: Int!,nomenclaturaId: Int!,viaGeneradora: Int!,prefijoViaGeneradora: String!,numeroPlacaCasa: Int!,aptoCasa: Int,infoAdicional: String,estado: Enum_Estado_Servicio!,userId: Int!
  }

  input ServicioWhereUniqueInput{
    id:String!
  }

  input ServicioUpdateInput{
  clienteId: IntInput
tipoServicio: Enum_Tipo_ServicioInput
planId: IntInput
nomenclaturaId: IntInput
viaGeneradora: IntInput
prefijoViaGeneradora: StringInput
numeroPlacaCasa: IntInput
aptoCasa: IntInput
infoAdicional: StringInput
estado: Enum_Estado_ServicioInput
userId: IntInput
  }

  type Mutation {
  createServicio(data:ServicioCreateInput):Servicio

  updateServicio(where:ServicioWhereUniqueInput!, data:ServicioUpdateInput ):Servicio

  deleteServicio(where: ServicioWhereUniqueInput!):Servicio

    }
  `
  export {ServicioTypes}
    