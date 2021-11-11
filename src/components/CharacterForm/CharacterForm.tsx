import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import './CharacterForm.css'



interface CharacterFormProps {
  editId: number | null;
  onCreate: (newCharaterElem: CharacterElemObj) => void;
  onEdit: (id: number, editCharacterElem: { name: string, realm: string, img: string, biography: string }) => void;
  type: 'create' | 'edit';
  characterElems: CharacterElemObj[];
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onCreate, onEdit, characterElems, editId, type }) => {


  const history = useHistory();

  const editElem = characterElems.find((elem) => {
    return elem.id === editId;
  });

  
  const [name, setName] = React.useState(editElem?.name || '');;
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }
  
  const [realm, setRealm] = React.useState(editElem?.realm || '');
  const handleRealmChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRealm(event.target.value);
  }


  const [img, setImg] = React.useState(editElem?.img || '');
  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setImg(event.target.value);
  }

  const [biography, setBiography] = React.useState(editElem?.biography || '');
  const handleBiographyChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setBiography(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();

    if (name === '' || biography === "" || realm === "" || img === "") {

      alert("Please enter all fields")
    } else {

      if (type === "create") {
        onCreate({
          id: Math.random(),
          name: name,
          img: img,
          realm: realm,
          biography: biography

        });
      }
      else if (type === "edit") {

        onEdit(editId!, { name: name, realm: realm, img: img, biography: biography });
        history.push('/characters');
      }
    }
  }

  return (<form className="GameForm" onSubmit={handleSubmit}>

    <TextField id="outlined-basic" label="Character name" variant="outlined" onChange={handleNameChange} value={name} />
    <TextField id="outlined-basic" label="Image url" variant="outlined" onChange={handleImgChange} value={img} />
    <TextField id="outlined-basic" label="Realm" variant="outlined" onChange={handleRealmChange} value={realm} />
    <TextField id="outlined-basic" label="Biography" variant="outlined" onChange={handleBiographyChange} value={biography} />
    <Button type="submit" variant="contained">{type === 'create' ? 'Create new character' : 'Save changes'}</Button>


  </form>);
}


export default CharacterForm;