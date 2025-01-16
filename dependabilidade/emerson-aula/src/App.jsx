import React, { useState } from 'react';
import './App.css'; // Estilos aprimorados
import imagemPrincipal from './assets/imagens/pessoa.jpg'; // Caminho da imagem que você deseja centralizar

function App() {
  const [showMore, setShowMore] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const curiosidades = [
    "Os golfinhos têm nomes próprios e se chamam pelo som de suas vozes.",
    "Uma tarântula pode viver sem comida por até dois anos.",
    "O coração de uma baleia pode pesar até 180 kg.",
    "As abelhas têm cinco olhos.",
    "Os pinguins se casam para a vida toda.",
    "O maior iceberg já registrado tinha o tamanho de Jamaica.",
    "As bananas são naturalmente radioativas devido ao potássio que contêm.",
    "O chocolate pode ser fatal para cães.",
    "A Terra é mais plana no equador do que nos polos.",
    "As cobras podem ter até três corações."
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>Curiosidades Incríveis</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </header>
      
      <div className="imagem-principal">
        <img 
          src={imagemPrincipal} 
          alt="Imagem Principal" 
          className="imagem-centralizada" 
        />
      </div>

      <main>
        <section className="curiosidades-lista">
          <h2>Fatos Curiosos que Você Talvez Não Soubesse</h2>
          <ul>
            {curiosidades.slice(0, showMore ? curiosidades.length : 5).map((curiosidade, index) => (
              <li key={index}>{curiosidade}</li>
            ))}
          </ul>
          <button className="show-more" onClick={toggleShowMore}>
            {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
