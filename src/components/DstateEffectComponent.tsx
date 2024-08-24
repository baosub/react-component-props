import React, { useState, useEffect } from 'react';

const DstateEffectComponent: React.FC = () => {

    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        console.log(`El contador es: ${contador}`);
      }, [contador]);
  return (
    <div>
         <p>Contador: {contador}</p>
         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      
    </div>
  )
}

export default DstateEffectComponent
