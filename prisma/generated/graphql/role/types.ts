
  import {gql} from 'apollo-server-micro'

  const RoleTypes = gql`
  type Role{
    id: ID!,name: String!,createdAt: DateTime!,updatedAt: DateTime!,users: [User]
  }

  type Query{
    roles:[Role]
    role(id:Int!):Role
  }

  input RoleCreateInput{
    name: String!
  }

  input RoleWhereUniqueInput{
    id:String!
  }

  input RoleUpdateInput{
  name: StringInput
  }

  type Mutation {
  createRole(data:RoleCreateInput):Role

  updateRole(where:RoleWhereUniqueInput!, data:RoleUpdateInput ):Role

  deleteRole(where: RoleWhereUniqueInput!):Role

    }
  `
  export {RoleTypes}
    