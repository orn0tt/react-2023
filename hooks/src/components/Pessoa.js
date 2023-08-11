import { useState } from "react";

function Pessoa(){
    const [email, setEmail] = useState('teste@gmail.com');
    
return(
    <div>
        <h1>Exemplo State</h1>
        <h2>{email}</h2>
        <button onClick={()=>setEmail('abc@gmail.com') }>Alterar</button>
        <h2>{email}</h2>
    </div>
)

}

export default Pessoa;