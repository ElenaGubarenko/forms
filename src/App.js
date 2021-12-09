import Container from "./Components/Container"
import HeaderNavigation from "./Components/HeaderNavigation"
import UniverseForm from "./Components/UniverseForm"
import CardsList from "./Components/CardsList"
import CardListAndUniverseFormContainer from "./Components/CardListAndUniverseFormContainer"

function App() {
  return (
    <>
      <Container>
        <HeaderNavigation></HeaderNavigation>
      </Container>
      <CardListAndUniverseFormContainer>
        <UniverseForm></UniverseForm>
        <CardsList></CardsList>
      </CardListAndUniverseFormContainer>
    </>
  )
}

export default App
