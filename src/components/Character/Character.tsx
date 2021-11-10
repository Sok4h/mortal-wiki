import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import { Link } from '../Link/Link';
import './Character.css'

export interface CharacterProps {
  
  characters : CharacterElemObj[];
}

const Character: React.FC<CharacterProps> = ({ characters }) => {

  const history = useHistory();

  const handleView = (id: number) => () => {

    history.push(`/character/${id}`);
  }

  return (<div className="charactersContainer">
    

    
    {characters.map((char) => {
      return <div key={char.id} className="characterCard" onClick={handleView(char.id)}>
      
      <img className="characterCard__image" src={char.img} alt="" />
      <p className="characterCard__name">{char.name}</p>

  </div>
    })}
  </div>)
  
  
  ;
}

export default Character;