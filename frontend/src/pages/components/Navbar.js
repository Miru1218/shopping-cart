import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
// import { AiOutlineSearch } from 'react-icons/ai';

// function Navbar() {
//   return (
    // <nav className="nav">
    //   <Link to="/" className="site-title">
    //     Shopping
    //   </Link>
    //   <form action="" className="search-form">
    //     <input type="search-input" placeholder=" Search" />
    //     <label className="search-btn">
    //       <AiOutlineSearch />
    //     </label>
    //   </form>
    //   <ul>
    //     <CustomLink to="/logIn">登入</CustomLink>
    //     <CustomLink to="/signUp">註冊</CustomLink>
    //   </ul>
    // </nav>
    // <Navbar bg="dark" variant="dark">
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>Shopping</Navbar.Brand>
    //     </LinkContainer>
    //   </Container>
    // </Navbar>
//   );
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//   return (
//     <li className={isActive ? 'active' : ''}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

// export default Navbar;
