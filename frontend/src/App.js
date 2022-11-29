import Navbar from './pages/components/Navbar';
import HomeScreen from './screens/HomeScreen';
import LogIn from './pages/member/LogIn';
import SignUp from './pages/member/SignUp';
import { Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <div>
      <header>
        <Navbar />
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
