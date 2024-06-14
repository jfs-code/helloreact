import React, { useState } from 'react'

  export default function Component() {

    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textonChange = (event) => {
      setText(event.target.value)
    }

    const buttonOnClick = (event) => {
      setUpdated(text)
    }
    
    return (
      <div>
        <input type='text' value={text} onChange ={textonChange} />
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {updated}</p>
      </div>
    )
}
