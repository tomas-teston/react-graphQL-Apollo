import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Cliente {
        id: ID,
        nombre: String
        apellido: String
        empresa: String
        emails: [Email],
        edad: Int,
        tipo: TipoCliente,
        pedidos: [Pedido]
    }
    type Pedido {
        producto: String,
        precio: Int
    }
    type Email {
        email: String
    }
    type Query {
        getCliente(id: ID): Cliente
    }
    enum TipoCliente{
        BASICO
        PREMIUM
    }
    input PedidoInput{
        producto: String,
        precio: Int
    }
    input EmailInput{
        email: String
    }
    input ClienteInput {
        id: ID,
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]!,
        edad: Int!,
        tipo: TipoCliente!,
        pedidos: [PedidoInput]
    }
    type Mutation {
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;