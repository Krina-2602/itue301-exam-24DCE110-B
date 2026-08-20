import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/borrow">Borrow</Link>
    </nav>
  );
}

export default Navigation;