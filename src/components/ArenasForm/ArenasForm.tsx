import * as React from 'react';
import { ArenaElemObj } from '../../types/ArenaElemObj';
import './ArenasForm.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { TagOption } from '../../types/TagOption';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';



interface ArenasFormProps {
  editId: number | null;
  onCreate: (newArenasElem: ArenaElemObj) => void;
  onEdit: (id: number, editCharacterElem: { name: string, description: string, img: string }) => void;
  addTagOption: (newTagOption: TagOption) => void;
  tagOptions: TagOption[];
  type: 'create' | 'edit';
  arenaElems: ArenaElemObj[];
}

const ArenasForm: React.FC<ArenasFormProps> = ({ onCreate, addTagOption, tagOptions, onEdit, arenaElems, editId, type }) => {

  const history = useHistory();

  const editElem = arenaElems.find((elem) => {
    return elem.id === editId;
  });

  const [name, setName] = React.useState(editElem?.name || '');
  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }

  const [description, setDescription] = React.useState(editElem?.description || '');
  const handleDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDescription(event.target.value);
  }


  const [img, setImg] = React.useState(editElem?.img || '');
  const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setImg(event.target.value);
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();
    const tagsStrings = tags.map((obj) => obj.label);

    if (name === '' || description === "" || img === "") {

      alert("Please enter all fields")
    } else {

      if (type === "create") {


        onCreate({
          id: Math.random(),
          name: name,
          img: img,
          description: description,
          conceptArt: tagsStrings
        });
      }
      else if (type === "edit") {

        onEdit(editId!, { name: name, description: description, img: img });
        history.push('/arenas');
      }
    }
  }

  const initialTags = [].map((tagString) => {
    return {
      label: tagString,
    };
  });

  const [tags, setTags] = React.useState<TagOption[]>(initialTags);

  const handleTagsChange = (event: React.SyntheticEvent<Element, Event>, values: (TagOption | string)[]) => {
    const transformed = values.map((value) => {
      // si el valor es un string, quiere decir que el usurio está agregando una nueva opción
      if (typeof value === "string") {
        const op = { label: value };
        addTagOption(op); // agregamos la nueva opción a la lista general de opciones
        return op;
      }
      return value;
    });
    setTags(transformed);
  };

  return (<form className="GameForm" onSubmit={handleSubmit}>

    <TextField id="outlined-basic" label="Arena name" variant="outlined" onChange={handleNameChange} value={name} />
    <TextField id="outlined-basic" label="Image url" variant="outlined" onChange={handleImgChange} value={img} />
    <TextField id="outlined-basic" label="descripcion" variant="outlined" onChange={handleDescriptionChange} value={description} />
    <Autocomplete
      multiple
      freeSolo
      disableClearable
      style={{
        width: "100%",

      }}
      id="combo-box-demo"
      options={tagOptions}
      renderInput={(params) => <TextField {...params} label="Tags" placeholder="Add a tag" />}
      onChange={handleTagsChange}
      value={tags as any}
      isOptionEqualToValue={(option, value) => {
        return option.label === value.label;
      }}
    />


    <Button type="submit" variant="contained">{type === 'create' ? 'Create new arena' : 'Save changes'}</Button>


  </form>);
}

export default ArenasForm;