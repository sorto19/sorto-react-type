import {ChangeEvent, useState} from 'react';

export const useForm =<T extends Object>(initState: T) =>{
    const [formulario, setFormulario] = useState({
        email:'',
        nombre:''
    });

    const handleChange=({target}:ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = target; 
        setFormulario({
            ...formulario,
            [name]:value 

        });
    }
    return{
        formulario,handleChange
    }
}