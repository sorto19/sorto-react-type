import {useState, useEffect, useRef} from 'react';

type TimerArgs={
   milisegundos:number,

}
export  const Timer = ({milisegundos}: TimerArgs) =>{


    const  [segundos, setSegundos ]= useState(0);
    const ref = useRef<NodeJS.Timeout>();
    useEffect(() => {
        //estoes hacer un if corto para verficxar si existe 
       ref.current && clearInterval(ref.current);
       ref.current =setInterval( () =>setSegundos(s => s+1),  1000);
      
    }, [milisegundos])
            return(
        <div>
            <h4>Timer: <small>{segundos}</small></h4>
        </div>
    )
}