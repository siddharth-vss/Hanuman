import { useNavigate } from "react-router-dom"
import img from '../../assets/HANUMAN.png';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <nav><a><img src={img} alt="" className="h-[30px]" onClick={()=>{navigate('/')}} /></a>
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger">
        <i className="fa-solid fa-bars"></i>
      </label>
      <ul>
        <li>
          <a onClick={()=>{navigate('/')}} className="active">Home</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}}>About</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}}>Features</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}}>services</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}}>F.A.Q</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar