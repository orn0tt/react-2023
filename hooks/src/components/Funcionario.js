import { useState } from "react";

function Funcionario(){
const[nome, setNome] = useState('');
const[email, setEmail] = useState('');


function cadastrarFuncionario(){
    alert(`Dados: ${nome} - ${email}`);
}

    return(
        <div>
            <form onSubmit={cadastrarFuncionario}>
                <label htmlFor="nome">nome:</label>
                <input id="nome" placeholder="Preencha o nome" onChange={ (e)=> setNome(e.target.value)}  />

                <label htmlFor="email">email:</label>
                <input id="email" placeholder="Preencha o email" onChange={ (e)=> setEmail(e.target.value)}  />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}
export default Funcionario;