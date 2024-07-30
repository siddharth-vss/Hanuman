import Home from "./pages/home"
import About from "./pages/about"
import {BrowserRouter ,Routes , Route} from 'react-router-dom' ;
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
