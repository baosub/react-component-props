

interface MiComponenteProps {
    mensaje: string;
  }

const CcomponentWithoutFC = ({ mensaje }: MiComponenteProps): JSX.Element => {
  return (
    <div>
        {mensaje}
      
    </div>
  )
}

export default CcomponentWithoutFC
