import * as React from 'react';
import { Redirect, useParams } from 'react-router';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import './Character_Details.css';
interface Character_DetailsProps {
  
  list: CharacterElemObj[];
}

const Character_Details: React.FC<Character_DetailsProps> = ({ list }) => {

  const { id: idString } = useParams<{ id: string }>();
  const id = parseFloat(idString);

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

  
  const { name, img, realm,biography } = elem;
  return <div className="characterDetail">

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
  </div>;
}

export default Character_Details;