
  import {gql} from 'apollo-server-micro'

  const ClienteTypes = gql`
  type Cliente{
    id: ID!,tipoDocumento: Enum_TipoDocumento!,documento: String!,fechaExpedicion: DateTime!,primerNombre: String!,segundoNombre: String,primerApellido: String!,segundoApellido: String,telefono: String,correo: String,estadoCivil: Enum_Estado_Civil,estrato: Int,genero: Enum_Genero,servicios: [Servicio],user: User!,userId: Int!,createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    clientes:[Cliente]
    cliente(id:Int!):Cliente
  }

  input ClienteCreateInput{
    tipoDocumento: Enum_TipoDocumento!,documento: String!,fechaExpedicion: DateTime!,primerNombre: String!,segundoNombre: String,primerApellido: String!,segundoApellido: String,telefono: String,correo: String,estadoCivil: Enum_Estado_Civil,estrato: Int,genero: Enum_Genero,userId: Int!
  }

  input ClienteWhereUniqueInput{
    id:String!
  }

  input ClienteUpdateInput{
  tipoDocumento: Enum_TipoDocumentoInput
documento: StringInput
fechaExpedicion: DateTimeInput
primerNombre: StringInput
segundoNombre: StringInput
primerApellido: StringInput
segundoApellido: StringInput
telefono: StringInput
correo: StringInput
estadoCivil: Enum_Estado_CivilInput
estrato: IntInput
genero: Enum_GeneroInput
userId: IntInput
  }

  type Mutation {
  createCliente(data:ClienteCreateInput):Cliente

  updateCliente(where:ClienteWhereUniqueInput!, data:ClienteUpdateInput ):Cliente

  deleteCliente(where: ClienteWhereUniqueInput!):Cliente

    }
  `
  export {ClienteTypes}
    