import './App.css';
import React from 'react';
import Saludo from "./Saludo";
import Despedida from "./Despedida";
import ListaCoches from './ListaCoches';


function App() {
 
  const mostrarSaludo = true; 
  
  const nombreUsuario = "Tania"; 

  return (
      <div>
          // Si mostrarSaludo es true se ejecuta la primera parte antes de los dos puntos. De ser false, la segunda
          {mostrarSaludo ? <Saludo nombre={nombreUsuario} /> : <Despedida nombre={nombreUsuario} />}
          <ListaCoches/>
      </div>
  );
}

export default App;
