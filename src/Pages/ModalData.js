import React from 'react'
import { useEffect } from "react"


function ModalData({itemDetails,itemCreds,customerDetails,customerSignature,installer}) {
    useEffect(() => {
    console.log("formfinaldata",itemDetails,itemCreds,customerDetails,customerSignature,installer)
    }, [customerSignature,installer])
    
  return (
    <>
       <div className='pdf-container'>
              <div className='pdf-row'>
                 <div className='left'><h5>Business Name</h5></div>
                 <div className='right'><p></p></div>
              </div> 
              <div className='pdf-row'>
                 <div className='left'><h5>Number of items</h5></div>
                 <div className='right'><p></p></div>
              </div>     
              <div className='pdf-box'>
                 <div className='left'><h5>Items Details</h5></div>
                 <div className='right'><p></p></div>
              </div>                    
       </div>
    </>
  )
}

export default ModalData