
import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";
import { TimerPadre } from "./components/TimerPadre";
import {ContadorREd} from "./components/ContadorREd";

function App() {
  return (
    <>
        <h1>Hola react mas  ts</h1>
        <hr/>

        <Counter />
        <br />
        <Usuario />
        <h2> useEffect - useRef </h2>
        
        <TimerPadre />
        <hr/>
        <h2> use reducer</h2>
        <hr/>
        <ContadorREd />
    </>
  );
}

export default App;
