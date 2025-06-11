import { useState } from "react"

import './Contador.css'
export default function Contador() {
    const [numero, setCount] = useState (0) 
    return (
        <>
            <div className="container">
                <h1>Contador de clicks</h1>
                <div className="contador">
                    <h3>{numero}</h3>
                    <div className="botoes">
                        <button onClick={() => setCount((numero) => numero + 1)}>  {/*Chamando a função e atribuindo um valor inteiro para a variavel numero*/}
                            adicionar click
                        </button> 

                        <button onClick={() => setCount((numero) => numero - 1)}> {/*Chamando a função e subtraindo -1 do valor da variavel numero*/}
                            subtrair click
                        </button>
                    </div>                   
                </div>            
            </div>
        </>
    )
           
}