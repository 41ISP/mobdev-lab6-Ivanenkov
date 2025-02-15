import { Image, Touchable, TouchableOpacity, View } from "react-native"
import { IHogwarts } from "../../components/entity/Hogwarts.rdo"
import { Text } from "react-native"
import { router } from "expo-router"
const Pers = ({name, image,actor, species, gender, house}: IHogwarts)=>{
    return(
        <View>
            <Image src={image}/>
            <Text>{name}</Text>
            <Text>{actor}</Text>
            <Text>{species}</Text>
            <Text>{gender}</Text>
            <Text>{house}</Text>
            <TouchableOpacity onPress={()=> router.push('/PageMain')}></TouchableOpacity>
        </View>
    )
}

export default Pers