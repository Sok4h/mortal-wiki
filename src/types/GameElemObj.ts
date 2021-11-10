import { CharacterElemObj } from "./CharacterElemObj";

export type GameElemObj =  {
    id:number,
    name: string;
    img:string;
    year?:number;
    description?: string;
    characters:CharacterElemObj[];
  }