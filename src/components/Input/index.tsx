import { Container } from "./style";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export function Input({...res}: TextInputProps){
    const {COLORS} = useTheme()
    return(
        <Container 
        placeholderTextColor={COLORS.GRAY_300}
        {...res}
        />
    )
}