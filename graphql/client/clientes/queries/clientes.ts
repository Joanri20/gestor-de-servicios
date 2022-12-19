import { gql } from '@apollo/client';

const GET_CLIENTES = gql`
  query Clientes {
    clientes {
      id
      documento
      primerNombre
      segundoNombre
      primerApellido
      segundoApellido
      servicios {
        id
      }
    }
  }
`;

export { GET_CLIENTES };
