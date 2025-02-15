import axios from "axios"
import { IHogwarts } from "../entity/Hogwarts.rdo";

const axioshogwartssite = axios.create({
  baseURL: "https://hp-api.herokuapp.com/api",
});

const hogwartsAPI = {
  axioshogwarts: async () => {
    const reponse = await axioshogwartssite.get<IHogwarts[]>("characters")
    return reponse.data
  },
  Id: async (id:string) => {
    const reponse2 = await axioshogwartssite.get<IHogwarts[]>(`character/${id}`)
    console.log(reponse2.data)
    return reponse2.data[0]
  }
}

export default hogwartsAPI