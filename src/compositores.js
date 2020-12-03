const Compositores = (props) => {
  const compositoresHTML = props.compositores.map((compositor) => {
    return (
      <li>
        <h1>{compositor.nombre}</h1>
        <p>Fecha: {compositor.fecha}</p>
        {compositor.canciones.map((cancion) => {
          return <p>{cancion}</p>;
        })}
      </li>
    );
  });
  return <ul>{compositoresHTML}</ul>;
};
export default Compositores;
