import { useState } from "react";

function Login() {
  const [log, setLog] = useState(false);

  const logar = () => {
    log
      ? alert("Usuário Logado com Sucesso !")
      : alert("Usuário saiu do sistema!");
  };

  // const logout = ()=>{
  //     alert("Usuário saiu do sistema!");
  // }

  return (
    <div>
      {/* <p>{!log?logout():login()}</p>*/}
      <button onClick={() => setLog(!log)}>
        {!log ? "Login" : "Logout"} {logar()}
      </button>
    </div>
  );
}

export default Login;
