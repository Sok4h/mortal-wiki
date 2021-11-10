import { Autocomplete, Button, TextField } from '@mui/material';
import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import { characterOptions } from '../../types/characterOptions';
import { GameElemObj } from '../../types/GameElemObj';
import Character from '../Character/Character';
import './Game_Details.css'

interface Game_DetailsProps {

    list: GameElemObj[];
    characterOptions:characterOptions[];
    onAddCharacters:(gameId:number, charactersId:number[])=>void;
}

const Game_Details: React.FC<Game_DetailsProps> = ({ list,characterOptions,onAddCharacters }) => {

    const [charactersState, setCharactersState] = React.useState<number[]>([]);

    const handleTagsChange = (event: React.SyntheticEvent<Element, Event>, values: (characterOptions)[]) => {
       const transformed = values.map((value) => {
          // si el valor es un string, quiere decir que el usurio está agregando una nueva opción
         
          return value.id;
       });
       setCharactersState(transformed);
    };

    const handleBtnClick=()=>{

        onAddCharacters(id,charactersState)
    }
    
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

    const { name, img, description,characters } = elem;

    return <div>

        <div className="imgContainer">

            <img src={img} className="imgDetail" />
            <h3 className="title">{name}</h3>
        </div>

        <h4 className="description">Description</h4>

        <p className="description">{description}</p>

        <section>
            <h3>Personajes</h3>


            <div className="characterContainer">

            

            <Character characters={characters}></Character>
            
            
            </div>

        </section>

        <section>

            <h3>Escenarios</h3>

            <div className="scenaryContainer">

            //aqui van los escenarios
            </div>

        </section>

        <Autocomplete
            multiple

            disableClearable
            style={{
                width: "100%",

            }}
            id="combo-box-demo"
            options={characterOptions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="characters" placeholder="Add a tag" />}
            onChange={handleTagsChange}
            //value={tags as any}
            isOptionEqualToValue={(option, value) => {
                return option.label === value.label;
            }}
        />
        <Button variant="contained" onClick={handleBtnClick}>Submit</Button>
       

    </div>;
}

export default Game_Details;