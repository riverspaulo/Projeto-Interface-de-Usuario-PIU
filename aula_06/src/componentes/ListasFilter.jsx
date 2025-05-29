import {times} from './dados.js'

export default  function ListasFilter() {

    const maiordetodos = times.filter(time => time === "flamengo")

    return (

        <div>
            <ul>
                {maiordetodos.map(maior => (
                    <li style={{fontSize: '36px', backgroundColor: "cornflowerblue", color:"white", listStyle:'none', fontWeight: "bold", padding: '15px'}}>
                        {maior}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}