import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import { useRef, useState } from "react"


const DisplayHome = () => {

  const inputRef = useRef();
  

  const handleClick=()=>{
    <inputRef className="current style"></inputRef>
  }


  return (
    <>
        <Navbar />
        <div className="mb-4">
            <h1 ref={inputRef} className="my-5 font-bold text-2xl">Featured Charts</h1>
            <button onClick={()=>{
              handleClick
            }}>Change color</button>
            <div className="flex overflow-auto">
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
            </div>   
        </div>
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
            <div className="flex overflow-auto">
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>   
        </div>
    </>
  )
}

export default DisplayHome
