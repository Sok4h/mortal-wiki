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
import { Bar } from 'react-chartjs-2';
import { getChartData } from './utils/getChartData';



function App() {

  const history = useHistory();

  const [gameFormType, setGameFormType] = React.useState<'create' | 'edit'>('create');
  const [characterFormType, setCharacterFormType] = React.useState<'create' | 'edit'>('create');
  const [arenaFormType, setArenaFormType] = React.useState<'create' | 'edit'>('create');

  const [editIdGame, setEditIdGame] = React.useState<number | null>(null);
  const [editIdArena, setEditIdArena] = React.useState<number | null>(null);
  const [editIdCharacter, setEditIdCharacter] = React.useState<number | null>(null);

  const [gameElems, setGameElems] = React.useState<GameElemObj[]>([

    {
      id: 1,
      name: "Mortal Kombat 11",
      year: 2011,
      img: "https://f3.trucoteca.com/fotos/7589/med/mortal-kombat-shaolin-monks-1.jpg",
      description: `Mortal Kombat 11 es la nueva entrega de la violenta y salvaje 
      saga de lucha de NetherRealm Studios para consolas y PC. Se trata de la undécima 
      secuela de una serie de títulos de combate y peleas de marcada estructura 2D, que
       en esta ocasión, además de añadir los mejores gráficos de la serie y el gore más
        descarnado en los llamados Fatality, presentará luchadores clásicos y nuevos, 
        más modos de juego y una oferta online que quiere marcar un antes y un después en los eSports.`,
      characters: [],
      arenas: []
    },

    {
      id: 2,
      name: "Mortal deadly Aliance",
      year: 2006,
      img: "https://www.ecured.cu/images/1/1e/Mortal_kombat_deadly_alliance.jpg",
      description: `Mortal Kombat 11 es la nueva entrega de la violenta y salvaje 
      saga de lucha de NetherRealm Studios para consolas y PC. Se trata de la undécima 
      secuela de una serie de títulos de combate y peleas de marcada estructura 2D, que
       en esta ocasión, además de añadir los mejores gráficos de la serie y el gore más
        descarnado en los llamados Fatality, presentará luchadores clásicos y nuevos, 
        más modos de juego y una oferta online que quiere marcar un antes y un después en los eSports.`,
      characters: [],
      arenas: []
    },
    {
      id: 3,
      name: "Mortal Kombat Armageddon",
      year: 2005,
      img: "https://m.media-amazon.com/images/I/513Y2Biv88L._SY445_.jpg",
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

    },
    {
      id: 1,
      name: 'Shao Kahn',
      realm: "EarthRealm",
      img: 'https://pbs.twimg.com/media/FDSrsXOXIAcuPkk?format=jpg&name=large',
      biography: "Prior to the events of the game series, Shao Kahn was a warlord protecting Outworld and an advisor to the realm's ruler, Onaga. Eventually, Shao Kahn poisoned Onaga, claiming his throne and his armies. The Kahn continued to add lesser realms to Outworld, including Edenia; forcing Queen Sindel and Princess Kitana to become his wife and personal assassin respectively. Sindel killed herself to escape the emperor, but he kept her soul in Outworld. One of the backwards dialogues in Deception's Konquest Mode suggests that Shao Kahn is a god-like being like Lucifer and the thunder god Raiden Shao Kahn first appears in Mortal Kombat II as the game's final boss and main antagonist. After the crooked tournament Grandmaster Shang Tsung and his warriors lose to Earthrealm in Mortal Kombat, the Kahn invokes a tournament rematch clause which will allow him to take Earthrealm immediately if he wins. Though he lures Earthre"

    },

    {
      id: 2,
      name: 'Sub Zero',
      realm: "EarthRealm",
      img: 'https://www.ecured.cu/images/0/00/Sub-Zero.jpg',
      biography: `Kuai Liang más conocido como Sub-Zero y anteriormente como Tundra es un personaje ficticio de la saga de videojuegos Mortal Kombat. Sub-Zero es el personaje más popular en la serie de Mortal Kombat junto con Scorpion.2​

      El personaje es un luchador formidable que posee la capacidad innata de controlar el hielo en muchas formas. En su primera aparición en Mortal Kombat II, se reveló que el Sub-Zero original había muerto durante los eventos del primer juego (de la mano de Scorpion) y fue reemplazado por su hermano. En los juegos posteriores, el hermano menor permaneció como Sub-Zero, mientras que el hermano mayor se convirtió en Noob Saibot. El rasgo más definitorio del personaje es su feroz rivalidad con su némesis Scorpion, la cual se terminó en Mortal Kombat X, cuando hicieron una tregua y se convirtieron en aliados.
      
      Uno de los pilares de la serie, Sub-Zero es uno de los tres únicos personajes que han aparecido en todos los principales juegos de Mortal Kombat (de una forma u otra).`

    },


  ]);

  const [arenasElems, setArenas] = React.useState<ArenaElemObj[]>([
    {
      id: 0,
      name: 'The pit',
      description: "EarthRealm",
      img: 'https://p4.wallpaperbetter.com/wallpaper/2/199/777/abstrsct-3840-x-2160-abstract-stage-wallpaper-preview.jpg',
      conceptArt: ["https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg"
      ]



    },
    {
      id: 1,
      name: 'Living Forest',
      description: " es un escenario disponible desde Mortal Kombat II. Como el nombre implícito sugiere, el lugar es descrito como un obscuro bosque con árboles vivos que tienden a rugir y a hacer muecas de malestar o intimidación. De acuerdo a ciertos pasajes del argumento del modo Konquest de Mortal Kombat Deception, el Bosque Viviente se encontraría próximo a la cuidad de Lei Chen, en Outworld, y en Mortal Kombat Shaolin Monks se muestra que una de sus ubicaciones es Reptile's Lair.",
      img: 'https://static.wikia.nocookie.net/mkwikia/images/7/72/Shao_Kahn%27s_Coliseum.jpg',
      conceptArt: ["https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg",
        "https://www.giantbomb.com/a/uploads/original/0/7661/483925-pyramidofargus_concept.jpg"
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


  const handleEditGame = (editId: number, editgamesElems: { name: string, description: string }) => {

    const gameElemsCopy = gameElems.slice();
    const editIndex = gameElems.findIndex((elem) => {
      if (elem.id === editId) {
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

  const handleEditArena = (editId: number, editarenaElems: { name: string, description: string, img: string }) => {

    const arenaElemsCopy = arenasElems.slice();
    const editIndex = arenasElems.findIndex((elem) => {
      if (elem.id === editId) {
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

  const handleEditCharacter = (editId: number, editcharacterElems: { name: string, realm: string, img: string, biography: string }) => {

    const characterElemsCopy = charactersElems.slice();
    const editIndex = charactersElems.findIndex((elem) => {
      if (elem.id === editId) {
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
  const data = getChartData(charactersElems, gameElems);
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

  const handleDelete = (deleteId: number) => {

    const gameElemsCopy = gameElems.filter((elem) => {
      if (elem.id === deleteId) {
        return false;
      } else {
        return true;
      }
    });
    setGameElems(gameElemsCopy);
    history.push('/home');
  }
  const addCharacters = (gameId: number, charactersId: number[]) => {

    const arrayCopy = gameElems.slice();
    const editIndex = gameElems.findIndex((elem) => {
      if (elem.id === gameId) {
        return true;
      }
      return false;
    });

    const charactersObj: CharacterElemObj[] = gameElems[editIndex].characters;

    let charExist = false;
    gameElems[editIndex].characters.map(character => {

      charactersId.map(id => {

        if (character.id === id) {

          charExist = true;
        }

      });

    })
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
            <ArenasForm type={arenaFormType} onEdit={handleEditArena} editId={editIdArena} onCreate={handleArenasCreate} addTagOption={handleAddTagOption} arenaElems={arenasElems} tagOptions={tagOptions}></ArenasForm>
          </Route>


          <Route path="/home">

            <Banner name="Mk Deception" img="https://f3.trucoteca.com/fotos/6746/mortal-komat-deception-11.jpg"></Banner>

            <Bar data={data} options={{

              indexAxis: 'y',
              // Elements options apply to all of the options unless overridden in a dataset
              // In this case, we are setting the border of each horizontal bar to be 2px wide
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              responsive: true,
              plugins: {
                legend: {
                  position: 'right',
                },
                title: {
                  display: true,
                  text: 'personajes con mas apariciones',
                },
              },
            }} />

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
            <Game_Details onDelete={handleDelete} onEdit={handleBeginEdit} onAddCharacters={addCharacters} onAddArenas={addArenas} list={gameElems} characterOptions={characterOptions} arenasOptions={arenasOptions}></Game_Details>
          </Route>

          <Route path="/character/:id">
            <Character_Details onEdit={handleBeginEditCharacter} games={gameElems} list={charactersElems}></Character_Details>
          </Route>
          <Route path="/arena/:id">
            <ArenaDetails onEdit={handleBeginEditArena} games={gameElems} arenas={arenasElems}></ArenaDetails>
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
