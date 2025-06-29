import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./style";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter ({title, isActive = false, ...res} : Props){
    return(
        <Container isActive={isActive} {...res}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}