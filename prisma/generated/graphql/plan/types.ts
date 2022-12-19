
  import {gql} from 'apollo-server-micro'

  const PlanTypes = gql`
  type Plan{
    id: ID!,descripcion: String!,tipoServicio: Enum_Tipo_Servicio!,tipoPropiedad: Enum_Tipo_Propiedad!,servicios: [Servicio],poblacion: Enum_Poblacion!,tarifa: Float!,createdAt: DateTime!,updatedAt: DateTime!
  }

  type Query{
    plans:[Plan]
    plan(id:Int!):Plan
  }

  input PlanCreateInput{
    descripcion: String!,tipoServicio: Enum_Tipo_Servicio!,tipoPropiedad: Enum_Tipo_Propiedad!,poblacion: Enum_Poblacion!,tarifa: Float!
  }

  input PlanWhereUniqueInput{
    id:String!
  }

  input PlanUpdateInput{
  descripcion: StringInput
tipoServicio: Enum_Tipo_ServicioInput
tipoPropiedad: Enum_Tipo_PropiedadInput
poblacion: Enum_PoblacionInput
tarifa: FloatInput
  }

  type Mutation {
  createPlan(data:PlanCreateInput):Plan

  updatePlan(where:PlanWhereUniqueInput!, data:PlanUpdateInput ):Plan

  deletePlan(where: PlanWhereUniqueInput!):Plan

    }
  `
  export {PlanTypes}
    