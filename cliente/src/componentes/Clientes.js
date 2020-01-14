import React from 'react'
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries';

const Clientes = () => (
    <Query query={CLIENTES_QUERY} >
        {({ loading, error, data }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.message}`;
            
            console.log(data);

            return (
                <h2 className="text-center">Listado de clientes</h2>
            )
        }}
    </Query>
)

export default Clientes;
