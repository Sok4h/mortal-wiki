import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import GameCard, { GameCardProps } from './components/GameCard/GameCard';
import GameForm from './components/GameForm/GameForm';
import Banner from './components/Banner/Banner';
import { HashRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom'
import Game_Details from './components/Game_Details/Game_Details';
import { GameElemObj } from './types/GameElemObj';
import Character from './components/Character/Character';
import { CharacterElemObj } from './types/CharacterElemObj';
import CharacterForm from './components/CharacterForm/CharacterForm';
import Character_Details from './components/Character_Details/Character_Details';
import { ArenaElemObj } from './types/ArenaElemObj';
import ArenasForm from './components/ArenasForm/ArenasForm';
import Arenas from './components/Arenas/Arenas';
import { TagOption } from './types/TagOption';
import { ThemeProvider } from '@emotion/react';
import { theme } from './utils/theme';
import { tagOptions } from './types/TagOptions';
import ArenaDetails from './components/ArenaDetails/ArenaDetails';



function App() {  
  
  const history = useHistory();

  const [ gameFormType, setGameFormType ] = React.useState<'create' | 'edit'>('create');
  const [ characterFormType, setCharacterFormType ] = React.useState<'create' | 'edit'>('create');
  const [ arenaFormType, setArenaFormType ] = React.useState<'create' | 'edit'>('create');

  const [ editIdGame, setEditIdGame ] = React.useState<number|null>(null);
  const [ editIdArena, setEditIdArena ] = React.useState<number|null>(null);
  const [ editIdCharacter, setEditIdCharacter ] = React.useState<number|null>(null);
  
  const [gameElems, setGameElems] = React.useState<GameElemObj[]>([

    {
      id: 1,
      name: "Mortal Kombat 11",
      year: 2011,
      img: "https://todoaplazo.com/images/products/54a4d1e3-424d-47d2-9ce0-ebf8213a3017-2.png",
      description: `Mortal Kombat 11 es la nueva entrega de la violenta y salvaje 
      saga de lucha de NetherRealm Studios para consolas y PC. Se trata de la undécima 
      secuela de una serie de títulos de combate y peleas de marcada estructura 2D, que
       en esta ocasión, además de añadir los mejores gráficos de la serie y el gore más
        descarnado en los llamados Fatality, presentará luchadores clásicos y nuevos, 
        más modos de juego y una oferta online que quiere marcar un antes y un después en los eSports.`,
      characters: [],
      arenas: []
    }
  ]);

  const [charactersElems, setCharacters] = React.useState<CharacterElemObj[]>([
    {
      id: 0,
      name: 'Liu Kang',
      realm: "EarthRealm",
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Anime_Expo_2014_Lui_Kang_Cosplay.jpg/245px-Anime_Expo_2014_Lui_Kang_Cosplay.jpg'

    }

  ]);

  const [arenasElems, setArenas] = React.useState<ArenaElemObj[]>([
    {
      id: 0,
      name: 'The pit',
      description: "EarthRealm",
      img: 'https://static.wikia.nocookie.net/mkwikia/images/7/72/Shao_Kahn%27s_Coliseum.jpg',
      conceptArt: ["https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Goros_lair.png",
        "https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Goros_lair.png",
        "https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Goros_lair.png",
        "https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Goros_lair.png"
      ]

    }

  ]);

  const handleCreate = (newGameElem: GameCardProps) => {

    const arrayCopy = gameElems.slice();
    arrayCopy.push({
      id: newGameElem.id,
      img: newGameElem.img,
      name: newGameElem.name,
      year: newGameElem.year,
      description: newGameElem.description,
      characters: [],
      arenas: []
    });


    setGameElems(arrayCopy);
  }

  const handleBeginEdit = (editId: number) => {
    setEditIdGame(editId);
    setGameFormType('edit');
    history.push('/form');
    
  }
  const handleBeginEditArena = (editId: number) => {
    setEditIdArena(editId);
    setArenaFormType('edit');
    history.push('/form');
    
  }

  const handleBeginEditCharacter = (editId: number) => {
    setEditIdCharacter(editId);
    setCharacterFormType('edit');
    history.push('/form');
   
  }


  const handleEditGame = (editId: number, editgamesElems: { name: string, description: string}) => {
   
    const gameElemsCopy = gameElems.slice();
    const editIndex = gameElems.findIndex((elem) => {
      if(elem.id === editId) {
        return true;
      }
      return false;
    });

    gameElemsCopy[editIndex] = {
      ...gameElems[editIndex],
      ...editgamesElems,
    }

    setGameElems(gameElemsCopy);
    setGameFormType('create');
    setEditIdGame(null);
  }

  const handleEditArena = (editId: number, editarenaElems: { name: string, description: string,img: string}) => {
   
    const arenaElemsCopy = arenasElems.slice();
    const editIndex = arenasElems.findIndex((elem) => {
      if(elem.id === editId) {
        return true;
      }
      return false;
    });

    arenaElemsCopy[editIndex] = {
      ...arenasElems[editIndex],
      ...editarenaElems,
    }

    setArenas(arenaElemsCopy);
    setArenaFormType('create');
    setEditIdArena(null);
  }

  const handleEditCharacter = (editId: number, editcharacterElems: { name: string, realm: string, img: string, biography: string}) => {
   
    const characterElemsCopy = charactersElems.slice();
    const editIndex = charactersElems.findIndex((elem) => {
      if(elem.id === editId) {
        return true;
      }
      return false;
    });

    characterElemsCopy[editIndex] = {
      ...charactersElems[editIndex],
      ...editcharacterElems,
    }

    setCharacters(characterElemsCopy);
    setCharacterFormType('create');
    setEditIdCharacter(null);
   // handleAddCharacterOption({ label: editcharacterElems.name, id: characterElemsCopy[editId].id })


  }

  const initialCharacters: tagOptions[] = [];
  charactersElems.map((char) => {

    initialCharacters.push({ label: char.name, id: char.id });

  });

  const initialArenas: tagOptions[] = [];
  arenasElems.map((arena) => {

    initialArenas.push({ label: arena.name, id: arena.id });

  });

  const [characterOptions, setCharacterOptions] = React.useState<tagOptions[]>(initialCharacters);

  const handleAddCharacterOption = (newCharacterOption: tagOptions) => {
    setCharacterOptions([...characterOptions, newCharacterOption]);
  };

  const [arenasOptions, setArenasOptions] = React.useState<tagOptions[]>(initialArenas);

  const handleAddArenaOption = (newArenaOption: tagOptions) => {
    setArenasOptions([...arenasOptions, newArenaOption]);
  };





  const handleCharacterCreate = (newCharaterElem: CharacterElemObj) => {

    const arrayCopy = charactersElems.slice();
    arrayCopy.push({
      id: newCharaterElem.id,
      img: newCharaterElem.img,
      name: newCharaterElem.name,
      realm: newCharaterElem.realm,
      biography: newCharaterElem.biography
    });


    setCharacters(arrayCopy);
    handleAddCharacterOption({ label: newCharaterElem.name, id: newCharaterElem.id })
  }

  const [tagOptions, setTagOptions] = React.useState<TagOption[]>([
    // { label: "test 1" },
    // { label: "test 2" },
    // { label: "Animals" },
  ]);

  const handleAddTagOption = (newTagOption: TagOption) => {
    setTagOptions([...tagOptions, newTagOption]);
  };




  const handleArenasCreate = (newArenasElem: ArenaElemObj) => {

    const arrayCopy = arenasElems.slice();
    arrayCopy.push({
      id: newArenasElem.id,
      img: newArenasElem.img,
      name: newArenasElem.name,
      description: newArenasElem.description,
      conceptArt: newArenasElem.conceptArt

    });
    setArenas(arrayCopy);

    handleAddArenaOption({ label: newArenasElem.name, id: newArenasElem.id })
  }

  const addArenas = (gameId: number, arenasId: number[]) => {

    const arrayCopy = gameElems.slice();
    const editIndex = gameElems.findIndex((elem) => {
      if (elem.id === gameId) {
        return true;
      }
      return false;
    });

    const arenasObj: ArenaElemObj[] = [];
    arenasId.map((id) => {

      arenasElems.map((arena) => {

        if (arena.id === id) {
          arenasObj.push(arena);
        }
      })


    })

    arrayCopy[editIndex] = {
      ...gameElems[editIndex],
      arenas: arenasObj
    }

    setGameElems(arrayCopy);


  }
  const addCharacters = (gameId: number, charactersId: number[]) => {

    const arrayCopy = gameElems.slice();
    const editIndex = gameElems.findIndex((elem) => {
      if (elem.id === gameId) {
        return true;
      }
      return false;
    });

    const charactersObj: CharacterElemObj[] = [];
    charactersId.map((id) => {

      charactersElems.map((char) => {

        if (char.id === id) {
          charactersObj.push(char);
        }
      })


    })

    arrayCopy[editIndex] = {
      ...gameElems[editIndex],
      characters: charactersObj
    }

    setGameElems(arrayCopy);


  }


  return (

    <ThemeProvider theme={theme}>
      
        <div className="App">

          <Header></Header>
          <Switch>
            <Route path="/form">
              <h2> juego</h2>
              <GameForm onEdit={handleEditGame} onCreate={handleCreate} editId={editIdGame} type={gameFormType} gameElems={gameElems} />
              <h2> personaje</h2>
              <CharacterForm onEdit={handleEditCharacter} onCreate={handleCharacterCreate} editId={editIdCharacter} type={characterFormType} characterElems={charactersElems} />
              <h2> arena</h2>
              <ArenasForm  type={arenaFormType} onEdit={handleEditArena} editId={editIdArena} onCreate={handleArenasCreate} addTagOption={handleAddTagOption} arenaElems={arenasElems} tagOptions={tagOptions}></ArenasForm>
            </Route>


            <Route path="/home">

              <Banner name="Mk Deception" img="https://f3.trucoteca.com/fotos/6746/mortal-komat-deception-11.jpg"></Banner>

              <h3 className="juegosDestacados">Juegos Destacados</h3>
              <article className="gallery">

                <section className="popularGames">

                  {gameElems.map((elem) => {

                    return <GameCard key={elem.id} id={elem.id} name={elem.name} img={elem.img} />;
                  })}
                </section>
              </article>
            </Route>

            <Route path="/details/:id">
              <Game_Details onEdit={handleBeginEdit} onAddCharacters={addCharacters} onAddArenas={addArenas} list={gameElems} characterOptions={characterOptions} arenasOptions={arenasOptions}></Game_Details>
            </Route>

            <Route path="/character/:id">
              <Character_Details onEdit={handleBeginEditCharacter} games={gameElems} list={charactersElems}></Character_Details>
            </Route>
            <Route path="/arena/:id">
              <ArenaDetails onEdit={handleBeginEditArena}games={gameElems} arenas={arenasElems}></ArenaDetails>
            </Route>



            <Route path="/characters" exact>

              <Character
                characters={charactersElems}
              ></Character>
            </Route>

            <Route path="/arenas" exact>
              <Arenas arenas={arenasElems}></Arenas>

            </Route>
          </Switch>


        </div>
      
    </ThemeProvider>
  );

}


export default App;
