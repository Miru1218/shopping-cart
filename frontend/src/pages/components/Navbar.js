import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Shopping
      </Link>
      <form action="" className="search-form">
        <input type="search-input" placeholder=" Search" />
        <label className="search-btn">
          <AiOutlineSearch />
        </label>
      </form>
      <ul>
        <CustomLink to="/logIn">登入</CustomLink>
        <CustomLink to="/signUp">註冊</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
