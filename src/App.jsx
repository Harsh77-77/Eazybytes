import React from "react"
import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Marque from "./Components/Marque"
import Quicklinks from "./Components/Quicklinks"
import Eyes from "./Components/Eyes"
import CursorFollow from "./Components/CursorFollow"
import Scroll from "./Components/Scroll"
import Featured from "./Components/Featured"

function App() {
  return (
    
      <div className="flex flex-col gap-16 bg-white dark:bg-gradient-to-tr from-gray-800 to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <CursorFollow />
        <div className="backdrop-blur-md sticky top-0 z-50 w-full">
          <Header />
        </div>
        <Body />
        <AboutMe />
        {/* <Projects /> */}
        <Featured/>
        <Eyes />
        <Footer />
        <Scroll/>
        <Quicklinks />
      </div>
 
  )
}

export default App
