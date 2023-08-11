import { useState } from "react";
function Contador(){
const[cont, setCont]= useState(0);
    
    //  function handleIncrement(){
    //      setCont(cont + 1);
    //  }


    return(
        <div>
            <p>Você clicou {cont} vezes !</p>
            <button onClick={()=>setCont(cont + 1)}>Clique Aqui</button>
        </div>
    );
}
export default Contador;