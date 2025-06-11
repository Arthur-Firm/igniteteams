import { Header } from "@/src/components/Header";
import {
  Container,
  InputContainer,
  HeaderFilter,
  NumberOfPlayers,
} from "./style";
import { Highlight } from "@/src/components/Highlight";
import { ButtonIcon } from "@/src/components/ButtonIcon";
import { Input } from "@/src/components/Input";
import { Filter } from "@/src/components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Player() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header />
      <Highlight
        title="Nome da turma"
        subtitle="selecione a galera e separe os times"
      />

      <InputContainer>
        <Input autoCorrect={false} placeholder="Nome da pessoa" />
        <ButtonIcon icon="add" />
      </InputContainer>
      <HeaderFilter>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderFilter>
    </Container>
  );
}
