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
    """ Asigna la categoría del cliente """
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
    """ Campos para los clientes nuevos """
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
    """ Mutations para crear nuevos clientes """
    type Mutation {
        #Nombre del resolver, Input con datos y valor que retorna
        """ Permite crear nuevos clientes """
        crearCliente(input: ClienteInput) : Cliente
    }
`);

export default schema;