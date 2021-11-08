import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import GameCard, { GameCardProps } from './components/GameCard/GameCard';
import GameForm from './components/GameForm/GameForm';
import Banner from './components/Banner/Banner';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Game_Details from './components/Game_Details/Game_Details';
import { GameElemObj } from './types/GameElemObj';
import Character from './components/Character/Character';
import { CharacterElemObj } from './types/CharacterObj';
import CharacterForm from './components/CharacterForm/CharacterForm';



function App() {

  const [gameElems, setGameElems] = React.useState<GameElemObj[]>([

    {
      id: 1,
      name: "Mortal Kombat 11",
      img: "https://playtecgames.com/wp-content/uploads/2020/05/mortal-ps4_2.jpg",
      description: `Mortal Kombat 11 es la nueva entrega de la violenta y salvaje 
      saga de lucha de NetherRealm Studios para consolas y PC. Se trata de la undécima 
      secuela de una serie de títulos de combate y peleas de marcada estructura 2D, que
       en esta ocasión, además de añadir los mejores gráficos de la serie y el gore más
        descarnado en los llamados Fatality, presentará luchadores clásicos y nuevos, 
        más modos de juego y una oferta online que quiere marcar un antes y un después en los eSports.`
    }
  ]);

  const [ charactersElems, setCharacters ] = React.useState<CharacterElemObj[]>([
    {
      id: 0,
      name: 'Liu Kang',
      realm:"EarthRealm",
      img:'https://playtecgames.com/wp-content/uploads/2020/05/mortal-ps4_2.jpg'

    }
    
  ]);

  const handleCreate = (newGameElem: GameCardProps) => {

    const arrayCopy = gameElems.slice();
    arrayCopy.push({
      id: newGameElem.id,
      img: newGameElem.img,
      name: newGameElem.name,
      year: newGameElem.year,
      description: newGameElem.description
    });

    const newArray = [
      ...gameElems,
      {

        img: newGameElem.img,
        name: newGameElem.name,
        year: newGameElem.year,
        description: newGameElem.description
      }
    ];
    setGameElems(arrayCopy);
  }

  const handleCharacterCreate = (newCharaterElem: CharacterElemObj) => {

    const arrayCopy = charactersElems.slice();
    arrayCopy.push({
      id: newCharaterElem.id,
      img: newCharaterElem.img,
      name: newCharaterElem.name,
      realm: newCharaterElem.realm,
      biography: newCharaterElem.biography
    });

    const newArray = [
      ...charactersElems,
      {

        img: newCharaterElem.img,
        name: newCharaterElem.name,
        realm: newCharaterElem.realm,
        biography: newCharaterElem.biography
      }
    ];
    setCharacters(arrayCopy);
  }



  return (

    <HashRouter>
      <div className="App">

        <Header></Header>
        <Switch>
          <Route path="/form">
            <GameForm onCreate={handleCreate} />
            <CharacterForm onCreate={handleCharacterCreate}/>
          </Route>


          <Route path="/home">

            <Banner name="Mk Deception" img="https://f3.trucoteca.com/fotos/6746/mortal-komat-deception-11.jpg"></Banner>

            <h3 className="juegosDestacados">Juegos Destacados</h3>
            <article className="gallery">

              <section className="popularGames">

                {gameElems.map((elem) => {


                  return <GameCard id={elem.id} name={elem.name} img={elem.img} />;
                })}
              </section>
            </article>
          </Route>

          <Route path="/details/:id">
            <Game_Details list={gameElems}></Game_Details>
          </Route>
          <Route path="/characters" exact>
            
            <Character
            characters ={charactersElems}
            ></Character>
          </Route>
        </Switch>


      </div>
    </HashRouter>
  );

}

export default App;
