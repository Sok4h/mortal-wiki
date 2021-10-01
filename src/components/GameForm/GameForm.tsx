import * as React from 'react';
import { GameCardProps } from '../GameCard/GameCard'
import './GameForm.css'

interface GameFormProps {
  onCreate: (newGameElem: GameCardProps) => void;

}

const GameForm: React.FC<GameFormProps> = ({ onCreate }) => {


  const [name, setName] = React.useState('');
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }


  const [img, setImg] = React.useState('');
  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setImg(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();

    onCreate({
      name: name,
      img: img
    });
  }

  return (<form className="GameForm" onSubmit={handleSubmit}>

  <input placeholder="Game name" type="text" onChange={handleNameChange} value={name} />
  <input placeholder="Image url"type="text" onChange={handleImgChange} value={img} />
  <button>Submit</button>

  </form>);
}






export default GameForm;