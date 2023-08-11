import { useState } from 'react';
import './Form.css';
function Form(){
    const[altura, setAltura]= useState(0);
    const[peso, setPeso]= useState(0);
    const[imc, setImc]= useState(0);
    //Fórmula do cálculo do IMC peso/altura**2

    const calcularIMC = (e)=>{
        e.preventDefault();
        setImc(peso/altura**2);
    }

    return(
        <div>
            <form className="formulario" onSubmit={calcularIMC}>
                <label>Peso:</label>
                <input type="number" step="0.01" id="peso" name="peso" required onChange={(e)=>setPeso(e.target.value)}/>

                <label>Altura:</label>
                <input type="number" id="altura" step="0.01" name="altura" required 
                onChange={(e)=>setAltura(e.target.value)}/>

                {peso && altura? <label>Resultado:{imc.toFixed(2)}</label> :''}
                <button className='botao'>Calcular</button>
            </form>
        </div>
    )

}

export default Form;