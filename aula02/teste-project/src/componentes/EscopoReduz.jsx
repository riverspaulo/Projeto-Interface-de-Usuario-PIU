import './EscopoReduz.css'

const EscopoReduz = () => {

    function handleClick(){
        return (
            alert("handleClick - função")
        )
    }

    function MudarFundo(){
        return 

    }
    return (
        <>
            <button onClick={() => console.log("Você clicou")}>Clique aqui- Reduz</button>
            <div>
                <button onClick={() => alert("Você clicou - função anonima")}>Novo Botão - Reduz Alerta</button>
            </div>
            <div>
                <button onClick={handleClick}>handleClick - Função</button>
            </div>
            <div className='container' onClick={() => alert("Conteiner")}>
                <p>div click</p>
            </div>

            <div>
                <button onClick={MudarFundo}>Mudar Fundo</button>
            </div>

        </>
    )
}

export default EscopoReduz