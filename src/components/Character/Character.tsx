import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { color } from '@mui/system';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import './Character.css'

export interface CharacterProps {

  characters: CharacterElemObj[];
}

const Character: React.FC<CharacterProps> = ({ characters }) => {

  const history = useHistory();

  const handleView = (id: number) => () => {

    history.push(`/character/${id}`);
  }

  return (<div className="charactersContainer">



    {characters.map((char) => {

      return <Card  key={char.id} sx={{ width: 150,minHeight:200 }  } onClick={handleView(char.id)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={char.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {char.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {char.biography}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      
    })}
  </div>)


    ;
}

export default Character;