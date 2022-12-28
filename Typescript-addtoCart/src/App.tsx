import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/CartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"
function App() {
 

    return <>
        <ShoppingCartProvider>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
    </Routes>
        </ShoppingCartProvider>
    </>
    
  
}

export default App
