import { Container, Title, ButtonTypeStyleProps } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title : string
    type?: ButtonTypeStyleProps
}

export function Button({title, type = 'PRIMARY', ...res} : Props){
    return(
    <Container type={type} {...res}>
        <Title>
            {title}
        </Title>
    </Container>
    )
}