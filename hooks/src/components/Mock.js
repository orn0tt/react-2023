import { useEffect, useState } from "react";

function Mock() {
  const [alunos, setAlunos] = useState([]);

  const [carregando, setCarregando] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://64d427fa67b2662bf3dd01d2.mockapi.io/api/v1/alunos"
      );

      const data = await response.json();

      setAlunos(data);
      setCarregando(false);
    } catch (error) {
      alert(`Ocorreu um erro ao carregar os dados.\n${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados da API Mock</h1>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {alunos.map((aluno, i) => {
            return <li key={aluno.id}>{aluno.nome} </li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Mock;
