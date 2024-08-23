import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Marque from "./Components/Marque"
import Quicklinks from "./Components/Quicklinks"
import Eyes from "./Components/Eyes"






function App() {

  

  return (
    <>
      <div className=" min-h-screen  flex flex-col gap-16 ">
      <div className="  backdrop-blur-md  sticky top-0 z-50 w-full ">
      <Header/></div>
      <Body/>
      <Eyes/>
      <Footer/>
      <Marque/>
      <Quicklinks/>
      
      </div>
    </>
  )
}

export default App
