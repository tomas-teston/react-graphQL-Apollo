import express from 'express';
// graphql
import graphqlHttp from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send('todo listo');
});

app.use('/graphql', graphqlHttp({
    // que schema va a utilizar
    schema,
    // utilizar graphical
    graphiql: true
}));

app.listen(8000, () => {
    console.log('El servidor está funcionando');
});