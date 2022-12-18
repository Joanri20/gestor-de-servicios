import { gql } from "apollo-server-micro";

const globalTypes = gql`

type Cliente{
    id:ID
    name:String
    email:String
    phoneNumber: String
}

type Query{
    obtenerClientes:Cliente
}
`;

const GlobalTypes = [globalTypes];

export { GlobalTypes };
