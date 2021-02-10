import {useForm} from '../hooks/useform';
import {ChangeEvent, useState} from 'react';


interface FormData{
    email: string;
    nombre: string;
    edad: number 
}

export const Formulario = () => {
  const {formulario, handleChange} =useForm<FormData> (
      {
          email:'ramonsorto1@gmail.com',
          nombre:'Ramon sorto',
          edad: 35
      }
  );
  //desectructurar
  const {email, nombre, edad} =formulario;

    return( 
        <form autoComplete="off">
       
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={ handleChange}/>

            </div>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text"
                className="form-control"
                name="nombre"
                value={nombre}
                onChange={handleChange}/>
                
            </div>
            <div className="mb-3">
                <label className="form-label">Edad</label>
                <input type="text"
                className="form-control"
                name="edad"
                value={edad}
                onChange={handleChange}/>
                
            </div>
            <pre>   {JSON.stringify(Formulario)}</pre>
        </form>
    )
}