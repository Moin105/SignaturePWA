import React from 'react'
import { useEffect,useState } from "react"
import JsPDF from 'jspdf';
import Sbutton from '../Components/Button/Sbutton'
import './ModalData.css'

function ModalData({count,date, itemDetails, itemCreds, customerDetails, customerSignature, installer , getModal }) {
    const generatePDF = () => {

        const report = new JsPDF('portrait','pt','a4');
        report.html(document.querySelector('#report')).then(() => {
            console.log("randox",report)
            report.save('report.pdf');
            
        });}
        // const d = new Date(date,"dd/mm/yyyy");
        // let dat = JSON.stringify(d)

  const [itemCount , setItemCount ] = useState(0)
  const [Items , setItems ] = useState([])
  const updatedArr = itemDetails.filter((item ,index)=>{if(item.item !== "" ) {return item }})
  useEffect(() => {
   setItemCount(itemCreds?.itemCount)

   setItems(updatedArr)
   console.log("ssssssss",Items)
  }, [itemCount])


  console.log("itemsssssssss",itemCount)

    useEffect(() => {
         
        console.log("formfinaldata",date, itemDetails, itemCreds, customerDetails, customerSignature, installer)

    }, [customerSignature, installer])

    return (
        <><div className='overlay'>
            <div className='modal'>  
            <div className='pdf-container' id='report'>
                <div className='head'><h4>Order Details</h4></div>
                <div className='pdf-row'>
                    <div className='left'><h5>Business Name</h5></div>
                    <div className='right'><p> {itemCreds?.businessName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Number of items</h5></div>
                    <div className='right'><p>{Items.length}</p></div>
                </div>
                <div className='pdf-box'>
                    <div className='top'><h5>Items Details</h5></div>
                    <div className='bottom'>{itemDetails?.map((item, index) => { 
                  if(item.item !== "")     { return  <div className='item-row' key={index}> <p className='p'>{item?.count}</p><p className='ps'>{item?.item}</p></div>
                
                }
                    })}

                    </div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Customer Name</h5></div>
                    <div className='right'><p>{customerDetails?.customerName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Email:</h5></div>
                    <div className='right'><p>{customerDetails?.email}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Date:</h5></div>
                <div className='right'><p>{date ? (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear() : "no date"}</p></div>
                </div>
                <div className='pdf-box'>
                    <div className='top'><h5>Items Details</h5></div>
                    <div className='bottom'><img src={customerSignature} className='signatures' /></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Installer Name:</h5></div>
                    <div className='right'><p>{installer?.installerName}</p></div>
                </div>
                <div className='pdf-row'>
                    <div className='left'><h5>Notes:</h5></div>
                    <div className='right'><p>{installer?.notes}</p></div>
                </div>
            </div>
            <div className='btn-row'>
                        <Sbutton  name="Close" type="close" func={getModal} onClick={()=>{console.log("close")}}/>
                        <Sbutton name="Confirm" type="confirm" func={generatePDF} onClick={()=>{console.log("close")}}/>
                    </div>
            </div>
        </div>

        </>
    )
}

export default ModalData