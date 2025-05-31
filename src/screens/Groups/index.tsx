import { Header } from "@/src/components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@/src/components/Highlight";
import { GroupCard } from "@/src/components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight title="Turmas" subtitle="Jogue com sua turma"/>

      <GroupCard title="Galera do Ignite"/>
    </Container>
  );
}
