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

  const [year, setYear] = React.useState('');
  const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setYear(event.target.value);
  }


  const [img, setImg] = React.useState('');
  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setImg(event.target.value);
  }

  const [description, setDescription] = React.useState('');
  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();

    if (name === '' || description === "" || year === "" || img === "") {

      alert("Please enter all fields")
    } else {
      onCreate({
        id: Math.random(),
        name: name,
        img: img,
        year: parseInt(year),
        description: description

      });
    }
  }

  return (<form className="GameForm" onSubmit={handleSubmit}>

    <input placeholder="Game name" type="text" onChange={handleNameChange} value={name} />
    <input placeholder="Image url" type="text" onChange={handleImgChange} value={img} />
    <input placeholder="Game year" type="number" onChange={handleYearChange} value={year} />
    <input placeholder="Game description" type="text" onChange={handleDescriptionChange} value={description} />
    <button>Submit</button>

  </form>);
}






export default GameForm;