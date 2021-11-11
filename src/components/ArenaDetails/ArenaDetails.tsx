import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ArenaElemObj } from '../../types/ArenaElemObj';
import { GameElemObj } from '../../types/GameElemObj';
import GameCard from '../GameCard/GameCard';
import './ArenaDetails.css'

interface ArenaDetailsProps {

  arenas: ArenaElemObj[];
  games: GameElemObj[];
}

const ArenaDetails: React.FC<ArenaDetailsProps> = ({ arenas, games }) => {



  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);

  const gamesArena: GameElemObj[] = [];
  games.map(game => {

    game.arenas.map(gameArena => {
        if(gameArena.id === id){

          gamesArena.push(game) ;
        }
      
    });
  });

  const elem = arenas.find((elem) => {

    if (elem.id === id) {
      return true;
    } else {
      return false;
    }
  });

  if (!elem) {
    return <Redirect to="/404" />;
  }

  
  const { name, img, description, conceptArt } = elem;

  return <div className="characterDetail">

    <div className="imgContainer">

      <img src={img} className="imgDetail" />
      <h3 className="title">{name}</h3>
    </div>


    <div className="Arena__Description">

      <h2>Description</h2>

      <p className="description">{description}</p>

    </div>

    <div className="conceptArtSection">

      <h2>Concept art</h2>

      <div className="conceptArtContainer">

        {conceptArt.map((concept,i) => {

          return <div key={i} className="conceptArt">

            <img src={concept} alt="" />
          </div>

        })}


      </div>

    </div>

    <div className="juegos">

      <h2>Apariciones</h2>

      <div className="apariciones">

        {gamesArena.map((game) => {

          return <GameCard key={game.id} id={game.id} name={game.name} img={game.img}></GameCard>

        })}



      </div>

    </div>


  </div>;;
}

export default ArenaDetails;