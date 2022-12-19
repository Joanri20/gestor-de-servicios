
  import {gql} from 'apollo-server-micro'

  const TipoOrdenServicioTypes = gql`
  type TipoOrdenServicio{
    id: ID!,nombre: String!,tipoServicio: Enum_Tipo_Servicio!,costo: Float,ordenServicios: [OrdenServicio]
  }

  type Query{
    tipoOrdenServicios:[TipoOrdenServicio]
    tipoOrdenServicio(id:Int!):TipoOrdenServicio
  }

  input TipoOrdenServicioCreateInput{
    nombre: String!,tipoServicio: Enum_Tipo_Servicio!,costo: Float
  }

  input TipoOrdenServicioWhereUniqueInput{
    id:String!
  }

  input TipoOrdenServicioUpdateInput{
  nombre: StringInput
tipoServicio: Enum_Tipo_ServicioInput
costo: FloatInput
  }

  type Mutation {
  createTipoOrdenServicio(data:TipoOrdenServicioCreateInput):TipoOrdenServicio

  updateTipoOrdenServicio(where:TipoOrdenServicioWhereUniqueInput!, data:TipoOrdenServicioUpdateInput ):TipoOrdenServicio

  deleteTipoOrdenServicio(where: TipoOrdenServicioWhereUniqueInput!):TipoOrdenServicio

    }
  `
  export {TipoOrdenServicioTypes}
    