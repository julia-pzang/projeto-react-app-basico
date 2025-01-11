import React from 'react';
import TextoEstilizado from "./components/texto-estilizado/texto-estilizado";
import ButtonAlert from './components/button-alert/button';

function App() {
  return (
    <div className="App">
      <TextoEstilizado 
        texto="Yuumi" 
        cor="rgb(235, 110, 193)"/>

        <ButtonAlert label="Baixar CV" />
    </div>
  );
}

export default App;
