import { useState } from 'react'
interface User {
    uid:string;
    name:string;
}


export const Usuario =() => {

const [user, setUser] = useState<User>();

const login = () =>{
    setUser({
        uid:'12345',
        name: 'karina mi amor'
    });
}
    return(
        <div className="mt-5">
            <h3>Usuario :useState</h3>
            <button 
            onClick={login}
            className="btn btn-otline-primary">
             Login
            </button>
           {
               (!user)
               ? <pre> no hay usuario</pre>
               : <pre>
               {JSON.stringify(user)}
           </pre>
}
        </div>
    )
}