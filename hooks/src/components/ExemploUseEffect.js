import { useEffect, useState } from "react";

function ExemploUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador !== 0) {
      alert(`Você clicou no botão ${contador} vezes.`);
    }
  }, [contador]);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Cliquei Aqui</button>
    </div>
  );
}

export default ExemploUseEffect;
