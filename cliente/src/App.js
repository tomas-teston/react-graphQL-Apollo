import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './componentes/Header';

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
      </ApolloProvider>
    </div>
  );
}

export default App;
