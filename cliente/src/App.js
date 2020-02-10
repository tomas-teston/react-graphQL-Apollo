import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './componentes/Header';
import { Clientes } from './componentes/Clientes';
import { NuevoCliente } from './componentes/NuevoCliente';
import { EditarCliente } from './componentes/EditarCliente';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  onError: ({networkError, graphQlErrors}) => {
    console.log('graphQlErrors', graphQlErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <div >
      <ApolloProvider client={client}>
        <Router>
          <>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes} />
                <Route exact path="/cliente/nuevo" component={NuevoCliente} />
                <Route exact path="/cliente/editar/:id" component={EditarCliente} />
              </Switch>
            </div>
          </>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
