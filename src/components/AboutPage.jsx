import Background_BW from "./Background_BW";
import Navbar from "./navbar";

import bw_coffee_beans_img from "../assets/images/bw-coffee-beans.png";
import MainContentSpace from "./MainContentSpace";

function AboutContent() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-amber-900">Welcome to Cafe Mystery, Readers!</h1>
      <p className="text-black">
        This cafe was inspired by the Sherlock Holmes series written by Sir Arthur Conan Doyle. Step inside and 
        you'll be transported to the heart of Victorian London, where the spirit of Baker Street and the legendary detective come alive. 
        Our menu and decor pay homage to the world of Holmes and Watson, blending the elegance of a classic English tea room with the 
        intrigue of a detective's lair. Whether you're here to enjoy a themed afternoon tea, solve a mini-mystery, or simply soak in 
        the atmosphere surrounded by memorabilia and nods to the stories, we invite you to sharpen your wits and savor a truly unique 
        culinary adventure worthy of 221B Baker Street.
      </p>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="flex flex-col baskervville-regular-italic">
      <Navbar />
      <div className="relative text-white text-center">
        <Background_BW img={bw_coffee_beans_img}/>
        <MainContentSpace ContentComponent={AboutContent}/>
      </div>
    </div>
  )
}

export default AboutPage;