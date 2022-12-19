
  import {gql} from 'apollo-server-micro'

  const UserTypes = gql`
  type User{
    id: ID!,primerNombre: String!,segundoNombre: String,primerApellido: String!,segundoApellido: String,cargo: String,roles: [Role],especialidad: String,caja: Int,tipoDocumento: Enum_TipoDocumento!,documento: String!,direccionNomenclatura: Nomenclatura!,nomenclaturaId: Int!,viaGeneradora: String!,prefijoViaGeneradora: String!,numeroPlacaCasa: String!,telefono: String,correo: String,estadoCivil: Enum_Estado_Civil,estrato: Int,genero: Enum_Genero,estado: Enum_Estado_User!,servicios: [Servicio],ordenServicioCreadas: [OrdenServicio],ordenServicioEjecutadas: [OrdenServicio],Cliente: [Cliente],createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    users:[User]
    user(id:Int!):User
  }

  input UserCreateInput{
    primerNombre: String!,segundoNombre: String,primerApellido: String!,segundoApellido: String,cargo: String,especialidad: String,caja: Int,tipoDocumento: Enum_TipoDocumento!,documento: String!,nomenclaturaId: Int!,viaGeneradora: String!,prefijoViaGeneradora: String!,numeroPlacaCasa: String!,telefono: String,correo: String,estadoCivil: Enum_Estado_Civil,estrato: Int,genero: Enum_Genero,estado: Enum_Estado_User!
  }

  input UserWhereUniqueInput{
    id:String!
  }

  input UserUpdateInput{
  primerNombre: StringInput
segundoNombre: StringInput
primerApellido: StringInput
segundoApellido: StringInput
cargo: StringInput
especialidad: StringInput
caja: IntInput
tipoDocumento: Enum_TipoDocumentoInput
documento: StringInput
nomenclaturaId: IntInput
viaGeneradora: StringInput
prefijoViaGeneradora: StringInput
numeroPlacaCasa: StringInput
telefono: StringInput
correo: StringInput
estadoCivil: Enum_Estado_CivilInput
estrato: IntInput
genero: Enum_GeneroInput
estado: Enum_Estado_UserInput
  }

  type Mutation {
  createUser(data:UserCreateInput):User

  updateUser(where:UserWhereUniqueInput!, data:UserUpdateInput ):User

  deleteUser(where: UserWhereUniqueInput!):User

    }
  `
  export {UserTypes}
    