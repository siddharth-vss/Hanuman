import { useNavigate ,useLocation } from "react-router-dom"
import img from '../../assets/HANUMAN.png';
import './nav.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname ;
  

  return (
    <>
      <nav><a><img src={img} alt="" className="h-[30px]" onClick={()=>{navigate('/')}} /></a>
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger">
        <i className="fa-solid fa-bars"></i>
      </label>
      <ul>
        <li>
          <a onClick={()=>{navigate('/')}} className={(path == '/')? 'active':''} >Home</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}} className={(path == '/about')? 'active':''} >About</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}} className={(path == '/xyz')? 'active':''} >Features</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}} className={(path == '/xyz')? 'active':''} >services</a>
        </li>
        <li>
          <a onClick={()=>{navigate('/')}} className={(path == '/xyz')? 'active':''} >F.A.Q</a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar