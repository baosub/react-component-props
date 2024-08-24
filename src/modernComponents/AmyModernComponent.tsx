interface MiComponenteProps {
    mensaje: string;
  }
const AmyModernComponent = ({mensaje}: MiComponenteProps) => {
  return (
    <div>
        {mensaje}
      
    </div>
  )
}

export default AmyModernComponent
