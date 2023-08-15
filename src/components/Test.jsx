import React, { useEffect, useState } from 'react'

const Test = () => {
    const [state, setstate] = useState({hola: 'hola'})

    const handleClick = () => {
        setstate({hola: 'hola2'})
        console.log(state)
    }

    //al cambiar el estado consologeua el estado usando el hook useEffect
    useEffect(() => {
        console.log(state)
    }, [state])

    console.log(state)
  return (
    <div>
        <h1>Test</h1>
        <button onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default Test


