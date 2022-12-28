import { Route,Routes } from "react-router-dom"
function App() {
 

    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
    </Routes>
    </>
    
  
}

export default App
