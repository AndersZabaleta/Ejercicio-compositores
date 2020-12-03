import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Compositores from "./compositores";
import EliminarCompositor from "./eliminarCompositor";
import Cabecera from "./cabecera";

function App() {
  const [text, setText] = useState("");

  const [compositores, setCompositores] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  const manageChange = (event) => {
    setText(event.target.value);
  };

  const anyadirCompositor = () => {
    // const nuevoArray = compositores.slice();
    // nuevoArray.push(text);
    // setCompositores(nuevoArray);
    //spread
    const nuevoArray = [...compositores, { nombre: text }];
    setCompositores(nuevoArray);
    setText("");
  };

  const borrarCompositor = (nombre) => {
    // const nuevoArray = compositores.filter((compositor) => compositor !== text);
    // setCompositores(nuevoArray);

    const nuevoArray = compositores.filter(function (compositor) {
      if (compositor.nombre !== nombre) {
        return true;
      } else {
        return false;
      }
    });
    setCompositores(nuevoArray);
  };

  return (
    <BrowserRouter>
      <Cabecera />
      <Route exact path="/">
        <Compositores compositores={compositores} />
        <input type="text" value={text} onChange={manageChange} />
        <button onClick={anyadirCompositor}>Añadir</button>
      </Route>
      <Route exact path="/eliminar">
        <EliminarCompositor borrarCompositor={borrarCompositor} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
