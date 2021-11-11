import { Autocomplete, Button, TextField } from '@mui/material';
import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { tagOptions } from '../../types/TagOptions';
import { GameElemObj } from '../../types/GameElemObj';
import Arenas from '../Arenas/Arenas';
import Character from '../Character/Character';
import './Game_Details.css'

interface Game_DetailsProps {

    list: GameElemObj[];
    characterOptions: tagOptions[];
    arenasOptions: tagOptions[];
    onAddCharacters: (gameId: number, charactersId: number[]) => void;
    onAddArenas: (gameId: number, arenasId: number[]) => void;
    onEdit?: (id: number) => void;
}

const Game_Details: React.FC<Game_DetailsProps> = ({ list, characterOptions, arenasOptions, onAddCharacters, onAddArenas, onEdit }) => {

    const [charactersState, setCharactersState] = React.useState<number[]>([]);
    const [arenasState, setArenasState] = React.useState<number[]>([]);

    const handleTagsCharacter = (event: React.SyntheticEvent<Element, Event>, values: (tagOptions)[]) => {

        const transformed = values.map((value) => {


            return value.id;
        });
        setCharactersState(transformed);
    };

    const handleBtnAddCharacters = () => {

        onAddCharacters(id, charactersState)
    }

    const handleTagsArenas = (event: React.SyntheticEvent<Element, Event>, values: (tagOptions)[]) => {
        const transformed = values.map((value) => {
            // si el valor es un string, quiere decir que el usurio está agregando una nueva opción

            return value.id;
        });
        setArenasState(transformed);
    };

    const handleBtnAddArenas = () => {

        onAddArenas(id, arenasState)
    }
    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (onEdit) {
            onEdit(id);
        }
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

    const { name, img, year, description, characters, arenas } = elem;

    return <div className="gameDetail">

        <button onClick={handleEdit}>edit</button>

        <div className="imgContainer">

            <img src={img} className="imgDetail" />
            <h3 className="title">{name}</h3>
            <p className="year">{year}</p>
        </div>

        <h4 className="subtitle">Description</h4>

        <p className="description">{description}</p>

        <section>
            <h3 className="subtitle">Personajes</h3>


            <div className="characterContainer">



                <Character characters={characters}></Character>


            </div>

        </section>

        <section>

            <h3 className="subtitle">Escenarios</h3>

            <div className="scenaryContainer">

                <Arenas arenas={arenas}></Arenas>
            </div>

        </section>


        {/* formulario personajes */}
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
            onChange={handleTagsCharacter}
            isOptionEqualToValue={(option, value) => {
                return option.label === value.label;
            }}
        />
        <Button variant="contained" onClick={handleBtnAddCharacters}>Submit</Button>

        {/* formulario arenas */}

        <h2 className="subtitle">Arenas</h2>
        <Autocomplete
            multiple

            disableClearable
            style={{
                width: "100%",

            }}
            id="combo-box-demo"
            options={arenasOptions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="arenas" placeholder="Add a tag" />}
            onChange={handleTagsArenas}
            //value={tags as any}
            isOptionEqualToValue={(option, value) => {
                return option.label === value.label;
            }}
        />

        <Button variant="contained" onClick={handleBtnAddArenas}>Submit</Button>


    </div>;
}

export default Game_Details;