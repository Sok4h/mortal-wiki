import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { GameElemObj } from '../../types/GameElemObj';
import { GameCardProps } from '../GameCard/GameCard'
import './GameForm.css'

interface GameFormProps {

  editId: number | null;
  onCreate: (newGameElem: GameCardProps) => void;
  onEdit: (id: number, editGameElem: { name: string, description: string }) => void;
  type: 'create' | 'edit';
  gameElems: GameElemObj[];

}

const GameForm: React.FC<GameFormProps> = ({ onCreate,onEdit, type, gameElems, editId }) => {

  const history = useHistory();

  const editElem = gameElems.find((elem) => {
    return elem.id === editId;
  });

  const [name, setName] = React.useState(editElem?.name || '');
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }

  const [year, setYear] = React.useState("");
  const handleYearChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setYear(event.target.value);
  }


  const [img, setImg] = React.useState(editElem?.img || '');
  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setImg(event.target.value);
  }

  const [description, setDescription] = React.useState(editElem?.description || '');
  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();

    if (name === '' || description === "" || img === "") {

      alert("Please enter all fields")
    } else {

      if (type === 'create') {
        onCreate({
          id: Math.random(),
          name: name,
          img: img,
          year: parseInt(year),
          description: description

        });
      }

      else if (type === 'edit') {

        onEdit(editId!, { name: name,description: description});
        history.push('/home');
      }
    }
  }

  return (<form className="GameForm" onSubmit={handleSubmit}>

    <TextField id="outlined-basic" label="Game name" variant="outlined" onChange={handleNameChange} value={name} />
    <TextField id="outlined-basic" label="Image url" variant="outlined" onChange={handleImgChange} value={img} />
    <TextField id="outlined-basic" label="Game year" type="number" variant="outlined" onChange={handleYearChange} value={year} />
    <TextField id="outlined-basic" label="Game description" variant="outlined" onChange={handleDescriptionChange} value={description} />
    <Button type="submit" variant="contained">{type === 'create' ? 'Create new game' : 'Save changes'}</Button>

  </form>);
}






export default GameForm;