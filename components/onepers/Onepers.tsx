import { router } from "expo-router";
import { Button, Image, TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { IHogwarts } from "../entity/Hogwarts.rdo";
import { useEffect } from "react";

const Pers = (props: IHogwarts)=>{
const {name, image, actor, species, gender, house, id} = props
useEffect(() => {
        console.log(props);

    }, [])
    return(
        <View>

        <Image  alt="Картинки нет :(((" style={styles.img} src={image}/>
        <View>
<Text>{image}</Text>
        <Text>Персонаж: {name}</Text>
        <Text>Актер: {actor}</Text>
        <Text>Вид: {species}</Text>
        <Text>Пол: {gender}</Text>
        <Text>Факультет: {house}</Text>
        </View>
        <TouchableOpacity onPress={()=> router.push('/page/PageChell')}>Посмотреть полную информацию</TouchableOpacity>
        
        </View>
    )

}
const styles = StyleSheet.create(
    {
        img: {
            width: 150,
            height: 100,

        }
    }
);

export default Pers