
    import { gql } from 'apollo-server-micro';
    import { RoleTypes } from './role/types';import { NomenclaturaTypes } from './nomenclatura/types';import { UserTypes } from './user/types';import { ClienteTypes } from './cliente/types';import { ServicioTypes } from './servicio/types';import { PlanTypes } from './plan/types';import { OrdenServicioTypes } from './ordenservicio/types';import { TipoOrdenServicioTypes } from './tipoordenservicio/types'
    import { GQLEnums } from './enums';

    const genericTypes = gql`
    scalar DateTime
    scalar Json
    scalar Decimal
    scalar BigInt
    input StringInput{
      set:String
    }
    input FloatInput{
      set:Float
    }
    input BooleanInput{
      set:Boolean
    }
    input IntInput{
      set:Int
    }
    input DateTimeInput{
      set:DateTime
    }
    input DecimalInput{
      set:Decimal
    }
    `;

    export const types = [genericTypes, GQLEnums, RoleTypes, NomenclaturaTypes, UserTypes, ClienteTypes, ServicioTypes, PlanTypes, OrdenServicioTypes, TipoOrdenServicioTypes];

  