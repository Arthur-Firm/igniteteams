import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'PRIMARY', ...res}: Props){
    return(
        <Container {...res}>
            <Icon name={icon} type={type} />
        </Container>
    )
}