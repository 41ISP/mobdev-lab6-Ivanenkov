import { IHogwarts } from "../entity/Hogwarts.rdo";
import Pers from "@/app/page/PageChell";
import { View } from "react-native";
const Feed= ({perz}: {perz: IHogwarts[]}) =>{
    return(
        <View className="feed">
            {perz.slice(0,10).map((onepers)=> <Pers key={onepers.id} {...onepers}/>)}  
        </View>
    )
}

export default Feed