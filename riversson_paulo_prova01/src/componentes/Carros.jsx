export default function Carros({carros}) {
    if (!character) {
        return null;
      }
    
    return (
        <>
            <div className='carros'>
                <h2>Lista de carros</h2>

                <ul>
                    <li>{carros.modelo} - {carros.ano}</li>
                </ul>
            </div>
        </>
    )


}