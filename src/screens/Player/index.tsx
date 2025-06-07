import { Header } from "@/src/components/Header";
import { Container, InputContainer } from "./style";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Input } from "@/src/components/Input";

export function Player(){
    return(
        <Container>
            <Header/>
            <Highlight title="Nome da turma" subtitle="selecione a galera e separe os times"/>
            
            <InputContainer>
                <Input autoCorrect={false} placeholder="Nome da pessoa"/>
                <ButtonIcon icon="add"/>
            </InputContainer>
        </Container>
    )
}