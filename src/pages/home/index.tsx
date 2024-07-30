import './home.css';
import bg from '../../assets/bg.mp4';
import logo from '../../assets/HANUMAN.png';
import btn from '../../assets/btn.png';
import frame from '../../assets/frame.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

const navigate =  useNavigate();
  const [size, setsize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const [opacity, setopacity] = useState(0)
  const [opacity1, setopacity1] = useState(0)
  const [opacity2, setopacity2] = useState(0)

  setTimeout(() => {
    setopacity(1);
    setTimeout(() => {
      setopacity1(1);
      setTimeout(() => {
        setopacity2(1);
      }, 4000);
    }, 2000);
  }, 1000);

  useEffect(() => {
    setsize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }, [onresize])
  return (
    <>
      <div className="loader h-screen w-full fixed top-0 left-0 z-30 bg-[#141414] p-[3vw]">
        <div className="relative size-full flex flex-col items-center justify-center gap-[3vw]">
          <img style={{ opacity: opacity }} className=" transition-opacity loader-border absolute h-full w-full top-0 left-0" src={frame} alt="" />
          <img style={{ opacity: opacity1 }} className='transition-opacity logo w-[25vw] -translate-y-[10%]' src={logo} alt="" />
          <button className="enter-experience-btn relative px-[2.5vw] transition-opacity py-[1vw] max-2xl:text-xs text-[#141414] uppercase translate-y-[0px] translate-x-[0px]" style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: opacity2 }}
          onClick={() => navigate('/about')}
          >
            Enter the experience
            <img  className="size-full absolute top-0 left-0 -z-[8]" src={btn} alt="" />
          </button>
        </div>
        <video src={bg} autoPlay muted loop height={size.height} width={size.width} className='transition-opacity overlay-video size-full absolute top-0 left-0 object-cover -z-10'></video>
      </div>
    </>
  )
}

export default Home
