import { useState } from "react";

function Carro() {
  const carros = [
    { id: 1, marca: "VW", modelo: "Gol" },
    { id: 2, marca: "Fiat", modelo: "Uno" },
    { id: 3, marca: "Toyota", modelo: "Hylux" },
    { id: 4, marca: "Ford", modelo: "Fiesta" },
    { id: 5, marca: "Nissan", modelo: "Skyline R34" },
  ];

  const [marcaFiltro, setMarcaFiltro] = useState("");

  const marcaFiltrada =
    marcaFiltro !== ""
      ? carros.filter((carro) => carro.marca === marcaFiltro)
      : carros;

  const listaCarros = carros.map((c, i) => (
    <li key={i}>
      {i} - {c.modelo}
    </li>
  ));

  return (
    <div>
      {/* <ul>{listaCarros}</ul> */}
      <label>Selecione uma marca </label>
      <select
        value={marcaFiltro}
        onChange={(event) => setMarcaFiltro(event.target.value)}
      >
        <option value="">Todos</option>
        <option value="VW">VW</option>
        <option value="Fiat">Fiat</option>
        <option value="Toyota">Toyota</option>
        <option value="Ford">Ford</option>
        <option value="Nissan">Nissan</option>
      </select>
      <ul>
        {marcaFiltrada.map((carro) => {
          return (
            <li key={carro.id}>
              {carro.marca} - {carro.modelo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Carro;
