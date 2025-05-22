import Card from "./Card"
import midorya from "../assets/midorya.jpg"
import tsuyo from "../assets/tsuyo.jpg"
import kirishima from "../assets/kirishima.jpg"
import tenya from "../assets/tenya.jpg"
import uraraka from "../assets/uraraka.jpg"
import bakugou from "../assets/bakugou.jpg"
import "./Galeria.css"


export default function Galeria () {
    return (
        <>
            <div>
                <h2>Personagens de My Hero Academia</h2>
            </div>

            <div className="galeria_personagens">
                <div className="imagem">
                    <Card personagens={midorya} nome="Izuko Midorya"></Card>
                </div>

                <div className="imagem">
                    <Card personagens={bakugou} nome="Bakugou"></Card>
                </div>

                <div className="imagem">
                    <Card personagens={kirishima} nome="Kirishima"></Card>
                </div>
                
                <div className="imagem">
                    <Card personagens={tenya} nome="Tenya Iida"></Card>
                </div>

                <div className="imagem">
                    <Card personagens={uraraka} nome="Uraraka "></Card>
                </div>

                <div nclassName="imagem">
                    <Card personagens={tsuyo} nome="Tsuyo "></Card>
                </div>

            </div>
        </>
    )
}