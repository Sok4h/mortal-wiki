import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
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

  return (<div className="ArenasContainer">



    {arenas.map((arena) => {
     


      return <Card key={arena.id}sx={{ maxWidth: 180 }} onClick={handleView(arena.id)} >
        <CardActionArea>
          <CardMedia
            component="img"
            image={arena.img}
            alt=""
          />
          <CardContent

            sx={{
              bgcolor: "#fff"
            }}
          >
            <Typography textAlign="center" fontSize="1rem" gutterBottom variant="h5" component="div">
              {arena.name}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>

    })}
  </div>)


    ;
}

export default Character;