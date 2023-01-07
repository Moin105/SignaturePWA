import React, { useState, useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas';
import Sbutton from '../Button/Sbutton';
import './Signature.css'
function Signature({ active, setActive, imageURL, setImageURL }) {
  const sigCanvas = useRef()
  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    setImageURL(URL)
    console.log("image", imageURL)
  }
  const download = () => {
    const dlink = document.createElement("a")
    dlink.setAttribute("href", imageURL)
    dlink.setAttribute("download", "signature.png")
    dlink.click()
  }
  return (
    <>
      <div className='sigan'>
        <div className='sigan-row'>
          <div>
            <p className='field-name'>Add Signature Here</p>

          </div>
          <span className='span' onClick={() => sigCanvas.current.clear()}>Clear Signature</span>
        </div>
        <p className='field-name' style={{ fontSize: '10px', marginTop: '-5px', textAlign: 'left' }}>Please fill the fields above to enable signature*</p>
        {active ? <div className='sig-box'><SignatureCanvas penColor="black"
          canvasProps={{ className: 'sigCanvas' }}
          ref={sigCanvas} />
          <Sbutton name="Confirm" type="confirm" func={create} />
        </div> : <div className='sigCan'></div>}
      </div>
    </>
  )
}

export default Signature