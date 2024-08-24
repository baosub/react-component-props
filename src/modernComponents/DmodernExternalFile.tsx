
import { Usuario, usuarios } from "./data";

const DmodernExternalFile = () => {
  return (
    <ul>
      {usuarios.map((usuario: Usuario) => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
};

export default DmodernExternalFile;