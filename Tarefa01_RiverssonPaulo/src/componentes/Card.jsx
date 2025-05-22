export default function Card(props){
    return(
        <div>
            <figure>
                <img src={props.personagens} alt=""  />
                <figcaption>{props.nome}</figcaption>
            </figure>
        </div>
    )
}