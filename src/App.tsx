import Home from "./pages/home"
import About from "./pages/about"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


const Demo = () => {
  const navigate = useNavigate();
  const click = () => {

    navigate("/home");
  }
  return <><h1 onClick={click} className="bg-black text-white cursor-pointer" >CLICK ON ME</h1></>
}
