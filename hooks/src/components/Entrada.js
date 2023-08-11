import { useState } from "react";

function Entrada() {
  const [texto, setTexto] = useState("");

   function handleText(evento) {
     setTexto(evento.target.value);
   }

    //const handleText = (e)=>setTexto(e.target.value);
  return (
    <div>
        <input type="text" value={texto} onChange={handleText} />
      {/* <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)} /> */}
       <p>{texto}</p>
    </div>
  );
}

export default Entrada;
