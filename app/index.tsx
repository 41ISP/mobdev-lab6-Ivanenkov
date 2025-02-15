import { IHogwarts } from "@/components/entity/Hogwarts.rdo"
import Input from "@/components/input/Input"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
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
            label: 'female', value: '1'
        },
        {
            label: 'male', value: '2'
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
            <Input value={value} setValue={setValue} placevalue={"123"} ></Input>
            <Dropdown data={data} value={value2} onChange={(e) => setValue2(e as TGender)} labelField={""} valueField={""}>
            
            </Dropdown>
            {/* <TouchableOpacity onPress={() => router.push('/PageMain')}><Text>Нажми</Text></TouchableOpacity> */}
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