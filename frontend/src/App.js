// import Navbar from './pages/components/Navbar';
import LogIn from './pages/member/LogIn';
import SignUp from './pages/member/SignUp';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/screens/HomeScreen';
import ProductScreen from './pages/screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div>
      <header>
        {/* <Navbar /> */}
        <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shopping</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
      </header>

      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
