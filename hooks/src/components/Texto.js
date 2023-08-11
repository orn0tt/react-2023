import { useEffect, useState } from "react";

function Texto() {
  const [texto, setTexto] = useState("Curso de React - Hooks");

  useEffect(() => {
    setInterval(() => {
      setTexto("UseEffect Aplicado");
    }, 3000);
  });

  return (
    <div>
      <h1>{texto}</h1>
    </div>
  );
}

export default Texto;
