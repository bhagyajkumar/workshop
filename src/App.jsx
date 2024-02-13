
import Header from "./Components/Header"
import Profile from "./Components/Profile"
import { Container } from "react-bootstrap"
import ProfileImage from "./assets/images.jpeg"

const App = ()=>{
  return(
    <div>
      <Header />
      <Container>
      <Profile image = {ProfileImage} />
      </Container>
      
    </div>
  )
}

export default App