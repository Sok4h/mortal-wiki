import * as React from 'react';
import { Redirect, useParams } from 'react-router';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import { GameElemObj } from '../../types/GameElemObj';
import GameCard from '../GameCard/GameCard';
import './Character_Details.css';
interface Character_DetailsProps {

  list: CharacterElemObj[];
  games: GameElemObj[];
  onEdit?: (id: number) => void;
}

const Character_Details: React.FC<Character_DetailsProps> = ({ list, games, onEdit }) => {

  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);

  const gamesArena: GameElemObj[] = [];

  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (onEdit) {
      onEdit(id);
    }
  }
  games.map(game => {

    game.characters.map(gameArena => {
      if (gameArena.id === id) {

        gamesArena.push(game);
      }

    });
  });

  const elem = list.find((elem) => {

    if (elem.id === id) {
      return true;
    } else {
      return false;
    }
  });

  if (!elem) {
    return <Redirect to="/404" />;
  }


  const { name, img, realm, biography } = elem;
  return <div className="characterDetail">

    <button onClick={handleEdit}>edit</button>

    <div className="characterDetail__header">

      <img src={img} alt="" />
      <h4 className="characterName">{name}</h4>
    </div>

    <div className="characterDetail__info">

      <p>Reino : {realm}</p>
    </div>
    <div className="characterDetail__Biography">

      <h2>Biografia</h2>

      <p className="biography">{biography}</p>

    </div>
  
      <div className="game-characterContainer">

      <h2>Apariciones</h2>

      {gamesArena.map((game) => {

        return <GameCard key={game.id} id={game.id} name={game.name} img={game.img}></GameCard>

      })}


    </div>
  </div>;
}

export default Character_Details;