import { BackIcon, Container, Logo, BackButton } from "./style";

import LogoIMG from '@assets/Logo.png'

type Props = {
    showBackButton?: boolean
}
export function Header({showBackButton = false} : Props){
    
    return(
        <Container>
            { showBackButton &&
            <BackButton>
                <BackIcon/>
            </BackButton>}
            <Logo source={LogoIMG}/>
        </Container>
    )
}