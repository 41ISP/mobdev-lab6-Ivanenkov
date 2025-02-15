export interface IHogwarts{
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: wand;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;
      
  }
  
  export interface wand{
      wood: string
      core: string
      length: string 
  }
  