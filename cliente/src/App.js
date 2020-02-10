import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';

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
        <Header />
        <div className="container">
          <Clientes />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
