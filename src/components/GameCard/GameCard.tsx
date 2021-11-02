import * as React from 'react';
import './GameCard.css'
import { useHistory } from 'react-router-dom';

export interface GameCardProps {
  id:number,
  name: string;
  img:string;
  year?:number;
  description?: string;
}


const GameCard: React.FC<GameCardProps> = ({name,img,id}) => {

  const history = useHistory();

  const handleView: React.MouseEventHandler<HTMLDivElement> = () => {
    history.push(`/details/${id}`);
  }
  
  
  return <div className="gameCard" onClick={handleView} >

      <img className="gameCard__image" src={img} alt="" />
      <p className="gameCard__name">{name}</p>

  </div>
  
  ;
}

export default GameCard;