import { IHogwarts } from "@/components/entity/Hogwarts.rdo"
import Input from "@/components/input/Input"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import Feed from "@/components/feed/Feed"
import { Dropdown } from "react-native-element-dropdown"
import hogwartsAPI from "@/components/shared/api"
type TGender = "female" | "male" | undefined
const Main = () => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState<TGender>(undefined)
    const [perz, setPerz] = useState<IHogwarts[]>([])
    const [filterperz, setFilterperz] = useState<IHogwarts[]>([]);
    const data= [
        {
            label: 'female', value: 'female'
        },
        {
            label: 'male', value: 'male'
        }
    ] as {label: TGender, value: string}[]
    useEffect(()=> {
        let filteredPerz = [...perz]
        // console.log(filteredPerz);
        
        if (value.length > 0) {
            filteredPerz = filteredPerz.filter((name) => name.name.includes(value))
        }
        
        if (value2) {
            filteredPerz = filteredPerz.filter((pol) => pol.gender == value2)
        }

        // console.log(filteredPerz);

        setFilterperz(filteredPerz)
    }, [value, value2])
    useEffect(()=>{
        const viZOV = async () => {
            const response = await hogwartsAPI.axioshogwarts()
            setFilterperz(response)
            setPerz(response);
        }
        viZOV();
    },[])
    
    return (
        <View style={styles.MainView} className="MainView">
            <Input value={value} setValue={setValue} placevalue={"Напишите имя и фамилию персонажа"} ></Input>
            <Dropdown data={data} value={value2} onChange={(e) => setValue2(e.value)} labelField={"label"} valueField={"value"}>
            
            </Dropdown>
            <Feed perz={filterperz}></Feed>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        MainView: {

        }
    }
);

export default Main