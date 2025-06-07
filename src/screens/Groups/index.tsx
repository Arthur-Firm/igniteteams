import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@/src/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/src/components/Highlight";
import { GroupCard } from "@/src/components/GroupCard";
import { ListEmpty } from "@/src/components/ListEmpty";
import { Button } from "@/src/components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header/>
      <Highlight title="Turmas" subtitle="Jogue com sua turma"/>
      <FlatList
      style={{width: '100%'}}
      data={groups}
      keyExtractor={item => item}
      contentContainerStyle={groups.length === 0 && {flex: 1}}
      renderItem={({item}) => (
        <GroupCard title={item}/>
      )}
      ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
      />
      <Button
      title="Criar nova turma"
      />
    </Container>
  );
}
