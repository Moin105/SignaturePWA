import React from 'react'
import './input.css'
function Input({ bname,min, name, icon, placeholder, type, handleChange, val }) {
  return (
    <>
      <div className='input-container'>
        <p className='field-name'>{bname}</p>
        <input placeholder={placeholder} min={min} value={val} type={type} className="input" name={name} onChange={handleChange} />
      </div>
    </>
  )
}

export default Input