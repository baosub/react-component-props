import React, { useEffect, useState } from 'react'


const BmodernStateEffect = () => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log(`El contador es: ${contador}`);
      }, [contador]);
  return (
    <div>
        <button onClick={()=>setContador(contador + 1)}>+</button>
        {contador}
      
    </div>
  )
}

export default BmodernStateEffect
