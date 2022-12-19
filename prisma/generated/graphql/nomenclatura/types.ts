
  import {gql} from 'apollo-server-micro'

  const NomenclaturaTypes = gql`
  type Nomenclatura{
    id: ID!,via: Enum_Via_Sector!,numero: Int!,prefijo: String!,nombre: String,users: [User],servicio: [Servicio],ordenServicioDestino: [OrdenServicio]
  }

  type Query{
    nomenclaturas:[Nomenclatura]
    nomenclatura(id:Int!):Nomenclatura
  }

  input NomenclaturaCreateInput{
    via: Enum_Via_Sector!,numero: Int!,prefijo: String!,nombre: String
  }

  input NomenclaturaWhereUniqueInput{
    id:String!
  }

  input NomenclaturaUpdateInput{
  via: Enum_Via_SectorInput
numero: IntInput
prefijo: StringInput
nombre: StringInput
  }

  type Mutation {
  createNomenclatura(data:NomenclaturaCreateInput):Nomenclatura

  updateNomenclatura(where:NomenclaturaWhereUniqueInput!, data:NomenclaturaUpdateInput ):Nomenclatura

  deleteNomenclatura(where: NomenclaturaWhereUniqueInput!):Nomenclatura

    }
  `
  export {NomenclaturaTypes}
    