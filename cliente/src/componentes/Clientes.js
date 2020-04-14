import React from 'react'
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries';
import { Link } from 'react-router-dom';

export const Clientes = () => (
    <Query query={CLIENTES_QUERY} pollInterval={1000}>
        {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.message}`;
            
            console.log(data.getClientes);

            return (
                <>
                    <h2 className="text-center">Listado de clientes</h2>
                    <ul className="list-group mt-4">
                        {data.getClientes.map(cliente => (
                            <li key={cliente.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex justify-content-between align-items-center"> 
                                        {cliente.nombre} {cliente.apellido} - {cliente.empresa}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link to={`/cliente/editar/${cliente.id}`} className="btn btn-success d-block d-nd-inline-block" >
                                            Editar cliente
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )
        }}
    </Query>
)
