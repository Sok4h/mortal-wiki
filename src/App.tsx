import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import GameCard, { GameCardProps } from './components/GameCard/GameCard';
import GameForm from './components/GameForm/GameForm';
import Banner from './components/Banner/Banner';
import { HashRouter, Route } from 'react-router-dom'

type GameElemObj = GameCardProps & {

  id: number;
}

function App() {

  const [gameElems, setGameElems] = React.useState<GameElemObj[]>([]);
  const handleCreate = (newGameElem: GameCardProps) => {

    const arrayCopy = gameElems.slice();
    arrayCopy.push({
      id: Math.random(),
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

    <HashRouter>
      <div className="App">

      
        <Header></Header>

        <Route path="/form">
        <GameForm onCreate={handleCreate} />
        </Route>

        <Route path="/home">

        <Banner name="Mk Deception" img="https://f3.trucoteca.com/fotos/6746/mortal-komat-deception-11.jpg"></Banner>
        

        <h3 className="juegosDestacados">Juegos Destacados</h3>
        <article className="gallery">

          <section className="popularGames">

            {gameElems.map((elem) => {
              return <GameCard key={elem.id} name={elem.name} img={elem.img} />;
            })}
          </section>
        </article>  
        </Route>

       

      </div>
    </HashRouter>
  );

}

export default App;
