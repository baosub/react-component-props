interface MiComponenteProps {
    onClick: (evento: React.MouseEvent<HTMLButtonElement>) => void;
  }

  const EtypedEvents = ({ onClick }: MiComponenteProps): JSX.Element => {
    return <button onClick={onClick}>Haz clic aquí</button>;
  };
  
  export default EtypedEvents