import express from 'express';
// graphql
import graphqlHttp from 'express-graphql';
import schema from './schema';
// resolvers
import resolvers from './resolvers';

const root = resolvers;

const app = express();

app.get('/', (req, res) => {
    res.send('todo listo');
});

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