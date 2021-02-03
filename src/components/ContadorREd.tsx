import React from 'react'
import {useReducer} from 'react'
import { TypeOfTag } from 'typescript';

const  initialState ={
    contador:10,
}
type ActionType =
| { type: 'incrementar'}
| { type: 'decrementar'}
| {type: 'custom', payload:number};


const  contadorReducer = (state: typeof initialState, action :ActionType) =>{
    
   switch(action.type) {
       case 'incrementar':
           return{
               ...state,
               contador:state.contador +1
           }
           case 'custom':
            return{
                ...state,
                contador:action.payload
            }
            case 'decrementar':
                return{
                    ...state,
                    contador:state.contador -1
                }

       default:
           return state;
   }
}



export const ContadorREd = () => {
    
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState);
    
    
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => dispatch({type: 'incrementar'})}
            className="btn btn=outline-primary">
                +1
            </button>
            <button onClick={() => dispatch({type: 'decrementar'})}
            className="btn btn=outline-primary">
                -1
            </button>
            <button onClick={() => dispatch({type: 'custom',payload: 100})}
            className="btn btn=outline-primary">
                +100
            </button>
        </div>
        
    )
}


