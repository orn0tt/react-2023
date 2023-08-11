import { useEffect, useState } from "react";

function CarregarUsuario() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/orn0tt")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <h1>Dados do usuario "{user.login}"</h1>
      <h2>Id: {user.id}</h2>
      <h3>Url: {user.url}</h3>
      <img src={user.avatar_url} alt="Avatar" />
    </div>
  );
}

export default CarregarUsuario;
