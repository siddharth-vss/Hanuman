import './about.css';
import voice from '../../assets/Hanuman Chalisa.flac';
import { chalisa, bottom, head } from '../../component/chalisa';
import gsap from "gsap";

import Navbar from '../../component/nav';
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
const index = () => {
  const chalisaMap = chalisa.split('/t');
  const headMap = head.split('/');
  const bottomMap = bottom.split('/');

  const [isPlaying, setIsPlaying] = useState(false);



  useGSAP(() => {


  }, [togglePlayPause])



  // const audio = new Audio(voice);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    return () => {
      console.log(audioRef,'s',audioRef.current?.duration);
      audioRef.current?.play();
    }
  }, [onload])

  function restart(){
    gsap.to('#chalisa', {
      transform : 'translateY(0%)',
      duration: 0,
      ease :"none"
    })
    audioRef.current?.play();
  }

  function togglePlayPause() {


    if (isPlaying) {
      audioRef.current?.pause();
      gsap.to('#chalisa', {
        transform : 'translateY(100%)',
        duration: 0,
        ease :"none"
      })
    } else {
      audioRef.current?.play();
      gsap.to('#chalisa', {
        transform: 'translateY(-100%)',
        // delay:15,
        duration: 248.333333,
        ease: "none"
      })
    }
    alert(`the Hanuman Chalisa is ${!isPlaying ? 'playing' : 'stoped'} `);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='bg'>
      <audio onLoad={() => {
        audioRef.current?.play();
      }} onEnded={() => { restart()  }} ref={audioRef} src={voice}></audio>
      <Navbar />
      <div onClick={togglePlayPause} onScroll={(e) => {
        console.log(e);
      }} className=" py-10 h-screen w-screen over" >
        <div id='chalisa'>
          <div className='content'>
            {headMap.map((e: string, index: number) => {
              return <div key={index} >{e} <br /> </div>
            })}
          </div>
          <div className='content'>
            {chalisaMap.map((e: string, index: number) => {
              let data = e.split('/s');
              return (<div key={index} > {data.map((i: string, j: number) => {

                return <div key={j} >{i} <br /></div>
              })}<br />
              </div>
              )
            })}
          </div>
          <div className='content'>
            {bottomMap.map((e: string, index: number) => {
              return <div key={index} >{e} <br /> </div>
            })}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default index
