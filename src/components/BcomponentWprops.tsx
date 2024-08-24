interface MiComponenteProps {
    mensaje: string;
    
  }

const BcomponentWprops: React.FC<MiComponenteProps> = ({mensaje}) => {
  return (
    <div>
        {mensaje}
      
    </div>
  )
}

export default BcomponentWprops
