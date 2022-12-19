
  import {gql} from 'apollo-server-micro'
  
  const GQLEnums = gql`
    
        enum Enum_TipoDocumento {
  CEDULA_CIUDADANIA
  CEDULA_EXTRANJERIA
  PASAPORTE
  TARJETA_IDENTIDAD
  NIT
}
        input Enum_TipoDocumentoInput{
          set:Enum_TipoDocumento
        }
        

        enum Enum_Estado_User {
  ACTIVO
  INACTIVO
}
        input Enum_Estado_UserInput{
          set:Enum_Estado_User
        }
        

        enum Enum_Estado_Servicio {
  ACTIVO
  SUSPENDIDO
  RETIRADO
}
        input Enum_Estado_ServicioInput{
          set:Enum_Estado_Servicio
        }
        

        enum Enum_Poblacion {
  URBANO
  RURAL
}
        input Enum_PoblacionInput{
          set:Enum_Poblacion
        }
        

        enum Enum_Estado_Civil {
  SOLTERO_A
  CASADO_A
  VIUDO_A
  UNION_LIBRE
  DIVORCIADO_A
}
        input Enum_Estado_CivilInput{
          set:Enum_Estado_Civil
        }
        

        enum Enum_Via_Sector {
  CALLE
  CARRERA
  TORRE
  BLOQUE
  VEREDA
  SECTOR
  VIA
  DIAGONAL
  TRANSVERSAL
}
        input Enum_Via_SectorInput{
          set:Enum_Via_Sector
        }
        

        enum Enum_Genero {
  MASCULINO
  FEMENINO
  OTRO
}
        input Enum_GeneroInput{
          set:Enum_Genero
        }
        

        enum Enum_Tipo_Propiedad {
  RESIDENCIAL
  COMERCIAL
}
        input Enum_Tipo_PropiedadInput{
          set:Enum_Tipo_Propiedad
        }
        

        enum Enum_Tipo_Servicio {
  TELEVISION
  INTERNET
}
        input Enum_Tipo_ServicioInput{
          set:Enum_Tipo_Servicio
        }
        

        enum Enum_Estado_Orden {
  ACTIVO
  FINALIZADO
  SUSPENDIDO
  CANCELADO
  EN_PROCESO
}
        input Enum_Estado_OrdenInput{
          set:Enum_Estado_Orden
        }
        
  `

  export {GQLEnums}
  