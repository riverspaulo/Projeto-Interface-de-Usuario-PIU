import { useState, useEffect } from 'react'

export default function CountClicks() {
  const [count, setCount] = useState(0)

  //useeffect (configurar, dependencias?)

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  },)  

//   3° passo -> quando tiver uma dependencia com variavel [{count}] tem o mesmo resultado visualmente de não ter dependencia
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}