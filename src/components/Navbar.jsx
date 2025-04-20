import { Link } from "react-router";

function Navbar() {
  return (
    <header>
      <nav className="flex justify-center m-3">
        <ul 
          className="flex justify-evenly w-full 
          baskervville-regular text-white
          underline underline-offset-3
          md:text-lg lg:text-2xl"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;