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