import { router } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

const Main = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => router.push('/PageMain')}><Text>Нажми</Text></TouchableOpacity>
        </View>
    )
}

export default Main