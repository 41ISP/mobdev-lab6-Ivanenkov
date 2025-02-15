import { TextInput } from "react-native";

interface IInput{
    value: string,
    setValue: ((e:string) => void);
    placevalue:"123"
}

const Input = ({ value, setValue , placevalue}: IInput) => {
    const handleChange = (e: string) => {
      setValue(e);
    };
  
    return <TextInput value={value} onChangeText={handleChange} placeholder={placevalue}/>;
  };
  
  export default Input;