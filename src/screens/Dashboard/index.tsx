import { 
Container,
Header,
UserInfo,
Photo,
User, 
UserGreeting,
UserName 
} from "./styles";
export function Dashboard() {

  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo source={{uri: "https://avatars.githubusercontent.com/u/83041382?v=4"}}/>
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Marcos</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  );
}


