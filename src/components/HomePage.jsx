import Navbar from "./navbar";
import Background_BW from "./Background_BW";

import bw_coffee_cup_beans_img from "../assets/images/bw-coffee-cup-beans.png";

function HomePage() {
  return (
    <div className="flex flex-col baskervville-regular-italic">
      <Navbar/>
      <div className="relative text-white text-center">

        <Background_BW img={bw_coffee_cup_beans_img}/>
        <div className="absolute flex flex-col items-center inset-0 z-10 max">
          <div className="max-md:text-3xl md:text-5xl lg:text-8xl
                max-md:m-10 md:m-20 lg:m-36">
            <h1>Cafe Mystery</h1>
          </div>

          <div>
            <h2 className="sm:max-md:text-xl md:text-2xl lg:text-5xl">Hours</h2>
            <ul className="flex flex-col mt-3 gap-6 sm:max-md:text-md md:text-lg lg:text-2xl">
              <li>Monday-Friday: 7 AM - 4 PM </li>
              <li>Saturday: 11 AM - 11 PM</li>
              <li>Sunday: CLOSED</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;