import React, {useState} from 'react'

export default function Component() {

    const [text, setText]= useState()
    const [update, setUpdate]= useState()
    const [contador, setContador] = useState(0)

    const textOnChange = (event) =>{
        setText(event.target.value)
    }

    const buttonOnClick = () =>{
        setUpdate(text)
    }

     function aumentar() {
        setContador(contador + 1); // actualiza el valor y React re-renderiza
    }


  return (
    <div>
      <input type="text" value={text} onChange={ textOnChange} />
      <button onClick={buttonOnClick}>Comenzar</button>
      <p>Texto input: {text}</p>
      <p>texto actualizado: {update}</p>
      <p>Mi componente ✅</p> 
      <p>Has hecho clic {contador} veces</p>
      <button onClick={aumentar}>Click</button>
      <p></p>

    </div>
  )
}
