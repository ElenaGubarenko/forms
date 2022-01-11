import Container from "./Components/Container"
import HeaderNavigation from "./Components/HeaderNavigation"
import UniverseForm from "./Components/UniverseForm"
import CardsList from "./Components/CardsList"
import CardListAndUniverseFormContainer from "./Components/CardListAndUniverseFormContainer"
import FormsList from './Components/FormsList'

function App() {
  return (
    <>
      <Container>
        <HeaderNavigation></HeaderNavigation>
      </Container>
      <CardListAndUniverseFormContainer>
        <UniverseForm></UniverseForm>
        <CardsList></CardsList>
        <FormsList></FormsList>
      </CardListAndUniverseFormContainer>
    </>
  )
}

export default App
