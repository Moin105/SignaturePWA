import React from 'react'
import './Button.css'
function Sbutton({name,type ,func}) {
  return (
    <>

    {type == "close" && <button className='sbtn' onClick={()=>{func(false)}}>{name}</button>}
    {type == "confirm" && <button className='suvbtn' onClick={()=>{func(false)}}>{name}</button>}
    </>
  )
}

export default Sbutton