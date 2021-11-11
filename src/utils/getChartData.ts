//import { MusicElemObj } from '../types/MusicElemObj';

import { CharacterElemObj } from "../types/CharacterElemObj";
import { GameElemObj } from "../types/GameElemObj";

export const getChartData = (characterElems: CharacterElemObj[], gameElems: GameElemObj[]) => {

  const counters2: {[key: string]: number} = {}
  const counters: number[] = [];

  const characterNames: string[] = [];

    characterElems.forEach(character => {

      characterNames.push(character.name);
  });

  console.log(characterNames)
  characterNames.forEach((name) => {

    console.log(name);
    gameElems.forEach((game) => {

      game.characters.forEach((elem) => {

        let rep=0;
        if (elem.name === name) {

          if(counters2[name]) {
            counters2[name]++;
          } else {
            counters2[name] = 1;
          }
          
        }
        console.log(name + rep)
        counters.push(rep);
        
      });

    });
   
  });
  return {
    labels:characterNames,
    datasets: [
      {
        label: '# de apariciones',
        data: Object.values(counters2),
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
      },
    ],
  };
}