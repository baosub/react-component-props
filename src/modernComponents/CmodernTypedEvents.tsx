import React from 'react';

interface MiComponenteProps {
  onClick: (evento: React.MouseEvent<HTMLButtonElement>) => void;
}

const CmodernTypedEvents = ({ onClick }: MiComponenteProps) => {
  return <button onClick={onClick}>Haz clic aquí</button>;
};

export default CmodernTypedEvents;
