import './about.css';
import voice from '../../assets/Hanuman Chalisa.flac';
import { chalisa, bottom, head } from '../../component/chalisa';

import Navbar from '../../component/nav';
import { useEffect, useRef, useState } from 'react';
const index = () => {

  const chalisaMap = chalisa.split('/t');
  const headMap = head.split('/');
  const bottomMap = bottom.split('/');

  const [isPlaying, setIsPlaying] = useState(false);
  // const audio = new Audio(voice);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    return () => {
     console.log(audioRef);
      audioRef.current?.play();
    }
  })

  const togglePlayPause = () => {
    if (isPlaying) {
        audioRef.current?.pause();
    } else {
        audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
};

  return (
    <div className='bg'>
      <audio onEnded={()=>{setIsPlaying(!isPlaying)}} ref={audioRef} src={voice}></audio>
      <Navbar />
      <div onClick={togglePlayPause} className=" py-10 h-screen w-screen over" >
        <div>
          {headMap.map((e: string, index: number) => {
            return <div key={index} >{e} <br /> </div>
          })}
        </div>
        <div  >
          {chalisaMap.map((e: string, index: number) => {
            let data = e.split('/s');
            return (<div key={index} > {data.map((i: string, j: number) => {

              return <div key={j} >{i} <br /></div>
            })}<br />
            </div>
            )
          })}
        </div>
        <div >
          {bottomMap.map((e: string, index: number) => {
            return <div key={index} >{e} <br /> </div>
          })}
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default index
