function Navbar() {
  return (
    <header className="border-b">
      <nav className="flex justify-center m-3">
        <ul className="flex justify-evenly w-full">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;