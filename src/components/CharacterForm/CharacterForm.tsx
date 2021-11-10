import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { CharacterElemObj } from '../../types/CharacterElemObj';
import './CharacterForm.css'



interface CharacterFormProps {
    onCreate: (newCharaterElem: CharacterElemObj) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onCreate }) => {


    const [name, setName] = React.useState('');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
    }
  
    const [realm, setRealm] = React.useState('');
    const handleRealmChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setRealm(event.target.value);
    }
  
  
    const [img, setImg] = React.useState('');
    const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setImg(event.target.value);
    }
  
    const [biography, setBiography] = React.useState('');
    const handleBiographyChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setBiography(event.target.value);
    }
  
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
      event.preventDefault();
  
      if (name === '' || biography === "" || realm === "" || img === "") {
  
        alert("Please enter all fields")
      } else {
        onCreate({
          id: Math.random(),
          name: name,
          img: img,
          realm: realm,
          biography: biography
  
        });
      }
    }
  
    return (<form className="GameForm" onSubmit={handleSubmit}>

      <TextField id="outlined-basic" label="Character name" variant="outlined" onChange={handleNameChange} value={name}/>
      <TextField id="outlined-basic" label="Image url" variant="outlined" onChange={handleImgChange} value={img}/>
      <TextField id="outlined-basic" label="Realm" variant="outlined" onChange={handleRealmChange} value={realm}/>
      <TextField id="outlined-basic" label="Biography" variant="outlined" onChange={handleBiographyChange} value={biography}/>
      <Button variant="contained" type="submit" >Submit</Button>

  
    </form>);
  }
  

export default CharacterForm;