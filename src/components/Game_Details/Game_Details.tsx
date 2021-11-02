import * as React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GameElemObj } from '../../types/GameElemObj';
import './Game_Details.css'

interface Game_DetailsProps {

    list: GameElemObj[];
}

const Game_Details: React.FC<Game_DetailsProps> = ({ list }) => {

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

    const { name, img, description } = elem;

    return <div >

        <div className="imgContainer">

            <img src={img} className="imgDetail"/>
            <h3 className="title">{name}</h3>
        </div>

        <h4>Description</h4>

        <p className="description">{description}</p>

        <section>
        <h3>Personajes</h3>
        
        <div className="characterContainer">

            //aqui van los personajes
        </div>

        </section>

        <section>
            
        <h3>Escenarios</h3>
        
        <div className="scenaryContainer">

            //aqui van los escenarios
        </div>
        
        </section>

    </div>;
}

export default Game_Details;