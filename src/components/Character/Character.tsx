import * as React from 'react';
import { CharacterElemObj } from '../../types/CharacterObj';
import { Link } from '../Link/Link';
import './Character.css'

export interface CharacterProps {
  
  characters : CharacterElemObj[];
}

const Character: React.FC<CharacterProps> = ({ characters }) => {

  
  return (<div className="charactersContainer">
    

    
    {characters.map((char) => {
      return <div className="characterCard">

      <a href="/authors/${author.id}"></a>
      <img className="characterCard__image" src={char.img} alt="" />
      <p className="characterCard__name">{char.name}</p>

  </div>
    })}
  </div>)
  
  
  ;
}

export default Character;