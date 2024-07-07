import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/villagers">Villagers</Link>
        <Link to="/form">Add Visitor</Link>
      </nav>
    </>
  );
}
