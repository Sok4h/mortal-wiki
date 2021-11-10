import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ArenaElemObj } from '../../types/ArenaElemObj';
import { Link } from '../Link/Link';
import './Arenas.css'

export interface ArenasProps {

  arenas: ArenaElemObj[];
}

const Character: React.FC<ArenasProps> = ({ arenas }) => {

  const history = useHistory();

  const handleView = (id: number) => () => {

    history.push(`/arena/${id}`);
  }

  return (<div className="charactersContainer">



    {arenas.map((arena) => {
      return <div key={arena.id} className="characterCard" onClick={handleView(arena.id)}>
        <img className="characterCard__image" src={arena.img} alt="" />
        <p className="characterCard__name">{arena.name}</p>

        
      </div>
    })}
  </div>)


    ;
}

export default Character;