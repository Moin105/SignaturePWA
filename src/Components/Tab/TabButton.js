import React, { useState } from 'react'
import './Tab.css'
function TabButton({ icon, name, state, setActive }) {
  return (
    <>
      <div className='tab-btn' onClick={() => { setActive(state); console.log("state", state) }}>
        <img src={icon} alt='btn' className='btn-img' />
        <p>{name}</p>
      </div>
    </>
  )
}

export default TabButton