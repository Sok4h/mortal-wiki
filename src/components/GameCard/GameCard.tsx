import * as React from 'react';
import './GameCard.css'

export interface GameCardProps {
  name: string;
  img:string;
}

const GameCard: React.FC<GameCardProps> = ({name,img}) => {
  
  return <div className="gameCard">

      <img className="gameCard__image" src={img} alt="" />
      <p className="gameCard__name">{name}</p>

  </div>
  
  ;
}

export default GameCard;