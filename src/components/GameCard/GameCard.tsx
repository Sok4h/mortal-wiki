import * as React from 'react';
import './GameCard.css'
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

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
  
  
  return <Card sx={{ maxWidth: 150 }}>
<CardActionArea>
  <CardMedia
    component="img"
    image={img}
    alt="green iguana"
  />
  <CardContent
  
  sx={{
    bgcolor:"#fff"
  }}
  >
    <Typography textAlign="center" fontSize="1rem" gutterBottom variant="h5" component="div">
      {name}
    </Typography>
    
  </CardContent>
</CardActionArea>
</Card>
  
  
  
  //  <div className="gameCard" onClick={handleView} >

  //     <img className="gameCard__image" src={img} alt="" />
  //     <p className="gameCard__name">{name}</p>

  // </div>
  
  ;
}

export default GameCard;