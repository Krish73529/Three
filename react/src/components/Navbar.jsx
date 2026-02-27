import { BrowserRouter, Routes, Route, Link } from "react-router";

function Navbar() {
  return (
    <BrowserRouter>
      <nav>
        <h2>Portfolio</h2>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
