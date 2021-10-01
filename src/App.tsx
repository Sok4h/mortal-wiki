import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import GameCard, { GameCardProps } from './components/GameCard/GameCard';
import GameForm from './components/GameForm/GameForm';

type GameElemObj = GameCardProps&{

  id: number;
}

function App() {

  const [ gameElems, setGameElems ] = React.useState<GameElemObj[]>([]);
  const handleCreate = (newGameElem: GameCardProps) => {
  
    const arrayCopy = gameElems.slice(); 
    arrayCopy.push({ 
      id:Math.random(),
      img: newGameElem.img,
      name: newGameElem.name
    });
  
    const newArray = [
      ...gameElems, 
      { 
        
        img: newGameElem.img,
        name: newGameElem.name
      }
    ];
    setGameElems(arrayCopy);
  }



  return (
    <div className="App">

     <Header></Header>
     
    <GameForm onCreate={handleCreate} />
     <h3 className="juegosDestacados">Juegos Destacados</h3>
      <article className="gallery">
        
     <section className="popularGames">
    
     {gameElems.map((elem) => {
        return <GameCard key={elem.id} name={elem.name} img={elem.img} />;
      })}
       </section> 
       </article>
     
    </div>
  );
}

export default App;
