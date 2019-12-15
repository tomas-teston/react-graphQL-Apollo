import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID,
        nombre: String
        apellido: String
        empresa: String
        email: String,
        edad: Int,
        tipo: TipoCliente
    }
    type Query {
        getCliente(id: ID): Cliente
    }
    enum TipoCliente{
        BASICO
        PREMIUM
    }
    input ClienteInput {
        id: ID,
        nombre: String!
        apellido: String!
        empresa: String!
        email: String!,
        edad: Int!,
        tipo: TipoCliente!
    }
    type Mutation {
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;