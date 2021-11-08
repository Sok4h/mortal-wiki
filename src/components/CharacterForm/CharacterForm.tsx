import * as React from 'react';
import { CharacterElemObj } from '../../types/CharacterObj';



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
  
      <input placeholder="Character name" type="text" onChange={handleNameChange} value={name} />
      <input placeholder="Image url" type="text" onChange={handleImgChange} value={img} />
      <input placeholder="Realm" type="text" onChange={handleRealmChange} value={realm} />
      <input placeholder="Biography" type="text" onChange={handleBiographyChange} value={biography} />
      <button>Submit</button>
  
    </form>);
  }
  

export default CharacterForm;