import React from 'react'
import { useEffect } from "react"
import './ModalData.css'

function ModalData({ itemDetails, itemCreds, customerDetails, customerSignature, installer }) {
    useEffect(() => {
        console.log("formfinaldata", itemDetails, itemCreds, customerDetails, customerSignature, installer)
    }, [customerSignature, installer])

    return (
        <><div className='overlay'>
            <div className='modal'>  <div className='pdf-container'>
                <div className='head'><h4>Order Details</h4></div>
                <div className='pdf-row'>
                    <div className='left'><h5>Business Name</h5></div>
                    <div className='right'><p> {itemCreds.businessName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Number of items</h5></div>
                    <div className='right'><p>{itemCreds.itemCount}</p></div>
                </div>
                <div className='pdf-box'>
                    <div className='top'><h5>Items Details</h5></div>
                    <div className='bottom'>{itemDetails.map((item, index) => {
                        return <div className='item-row' key={index}> <p className='p'>{item.count}</p><p className='ps'>{item.item}</p></div>
                    })}

                    </div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Customer Name</h5></div>
                    <div className='right'><p>{customerDetails.customerName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Email:</h5></div>
                    <div className='right'><p>{customerDetails.email}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Date:</h5></div>
                    <div className='right'><p>{customerDetails.date}</p></div>
                </div>
                <div className='pdf-box'>
                    <div className='top'><h5>Items Details</h5></div>
                    <div className='bottom'><img src={customerSignature} className='signatures' /></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Installer Name:</h5></div>
                    <div className='right'><p>{installer.installerName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Notes:</h5></div>
                    <div className='right'><p>{installer.notes}</p></div>
                </div>
            </div></div>
        </div>

        </>
    )
}

export default ModalData