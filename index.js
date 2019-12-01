import express from 'express';
// graphql
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('todo listo');
});

// el resolver
const root = {cliente: () => {
    return {
        "id": 123123123123,
        "nombre": "Tomy",
        "apellido": "Munoz",
        "empresa": "Empresa",
        "emails": [
            {email: "correo@hotmail.com"},
            {email: "correoEmpresa@hotmail.com"}
        ]
    }
}};

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