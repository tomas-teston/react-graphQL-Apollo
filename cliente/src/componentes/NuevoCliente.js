import React, {useState} from 'react';

import { NUEVO_CLIENTE } from '../mutations';
import { Mutation } from 'react-apollo';
import { useHistory } from 'react-router-dom';

export const NuevoCliente = () => {

    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        empresa: "",
        edad: "",
        tipo: ""
    });

    const history = useHistory();

    const [emails, setEmails] = useState([]);

    const nuevoCampo = () => {
        setEmails(emails.concat([{email: ""}]));
    }

    const quitarCampo = index => () => {
        setEmails(emails.filter((_x, i)=> i !== index));
    }

    const leerCampo = index => event => {
        const nuevosEmails = emails.map((x, i) => {
            if (i !== index) return x;
            return {
                ...x,
                email: event.target.value
            }
        })
        setEmails(nuevosEmails);
    }

    const handleGoHome = () => {
        history.push("/");
    }

    return (
        <>
            <h2 className="text-center">Nuevo Cliente</h2>
            <div className="row justify-content-center">
                <Mutation 
                    mutation={NUEVO_CLIENTE} 
                    onCompleted={() => handleGoHome()}
                >
                { crearCliente => (
                    <form className="col-md-8 m-3" onSubmit={e => {
                        e.preventDefault();

                        const input = {
                            ...cliente,
                            edad: Number(cliente.edad),
                            emails: emails
                        }

                        crearCliente({
                            variables: {input}
                        });
                    }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre" 
                                    onChange={(e) => setCliente({
                                        ...cliente,
                                        nombre: e.target.value
                                    })}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Apellido"
                                    onChange={(e) => setCliente({
                                        ...cliente,
                                        apellido: e.target.value
                                    })}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Empresa</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Empresa"
                                    onChange={(e) => setCliente({
                                        ...cliente,
                                        empresa: e.target.value
                                    })}
                                />
                            </div>
                            {emails.map((x, index) => (
                                <div key={index} className="form-group col-md-12">
                                    <label>Correo: {index + 1}</label>
                                    <div className="input-group">
                                        <input type="email" placeholder="email" className="form-control" onChange={leerCampo(index)} value={x.email}/>
                                        <div className="input-group-append">
                                            <button type="button" className="btn btn-danger" onClick={quitarCampo(index)}> &times; Eliminar </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="form-group d-flex justify-content-center col-md-12">
                                <button type="button" className="btn btn-warning" onClick={nuevoCampo} >Agregar email</button>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Edad</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Edad"
                                    onChange={(e) => setCliente({
                                        ...cliente,
                                        edad: e.target.value
                                    })}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Tipo Cliente</label>  
                                <select 
                                    className="form-control"
                                    onChange={(e) => setCliente({
                                        ...cliente,
                                        tipo: e.target.value
                                    })}
                                >
                                    <option value="">Elegir...</option>
                                    <option value="PREMIUM">PREMIUM</option>
                                    <option value="BASICO">BÁSICO</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                    </form>
                )}                   
                </Mutation>
            </div>
        </>
    )
}   