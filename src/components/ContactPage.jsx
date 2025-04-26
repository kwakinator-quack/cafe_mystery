import Navbar from "./navbar";
import Background_BW from "./Background_BW";

import bw_coffee_beans_bowl from '../assets/images/bw-coffee-beans-bowl.png'
import MainContentSpace from "./MainContentSpace";

function ContactContent() {
  return (
    <div className="text-black flex flex-col gap-5">
      <h1 className="max-md:text-base md:text-xl lg:text-3xl">Contact Us</h1>
      <ul className="max-md:text-xs md:text-base lg:text-xl">
        <li>Email: cafemystery@mystery.com</li>
        <li>Phone Number: 123-456-7890</li>
        <li>Address: 221 Baker Street, London, England</li>
      </ul>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="flex flex-col baskervville-regular-italic">
      <Navbar />
      <div className="relative text-white text-center">
        <Background_BW img={bw_coffee_beans_bowl}/>
        <MainContentSpace ContentComponent={ContactContent}/>
      </div>
    </div>
  )
}

export default ContactPage;