import express from 'express';
// graphql
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('todo listo');
});

// el mutador
class Cliente {
    constructor(id, {nombre, apellido, empresa, email}) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.empresa = empresa;
        this.email = email;
    }
}

// DDBB Fake
const clientesDB = {};

// el resolver
const root = {
    cliente: () => {
        return {
            "id": 123123123123,
            "nombre": "Tomy",
            "apellido": "Munoz",
            "empresa": "Empresa",
            "email": "Empresa@empresa.com"
        }
    },
    crearCliente: ({input}) => {
        const id = require("crypto").randomBytes(10).toString("hex");
        clientesDB[id] = input;
        return new Cliente(id, input);
    }
};

app.use('/graphql', graphqlHttp({
    // que schema va a utilizar
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphical
    graphiql: true
}));

app.listen(8000, () => {
    console.log('El servidor está funcionando');
});