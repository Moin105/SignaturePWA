import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import { Calendar } from 'primereact/calendar';
import './Cutomer.css'
function Customer({ setTab, getData }) {
  const [disabled, setDisabled] = useState(true)
  const [active, setActive] = useState(false)
  const [date, setDate] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const datereg = { regex: "/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$" };
  const disable = () => {
    setDisabled(false)
  }
  const enable = () => {
    setDisabled(true)
  }
  const [details, setDetails] = useState({
    customerName: "",
    date: "",
    email: "",
  });
  var itemsArr = []
  useEffect(() => {
    // disable()
    // if (imageURL !== ("" || null || NaN)) {
    //   setDisabled(false)
    //   // enable()
    // }
    enable()
    if (details.customerName !== "" && date !== null && details.email !== "") {
      console.log("accepted")
      if (details.email.match(validRegex)) {
        setActive(true)
      }
      else {
        setActive(false)
      }
    }
    // else
    // {
    //       setActive(false)
    // }

  }, [details, date])
  useEffect(() => {

    if (imageURL !== null) {
      setDisabled(false)
      disable()
    }
  }, [imageURL])

  // const getSignature = ()=>{
  //   setDisabled(false)
  // }
  const handleChange = (e) => {
    e.preventDefault()
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
    e.preventDefault()
  };
  const getSignatureValue = (signature) => {
    setImageURL(signature)
    disable()
  }


  const getStep = () => {
    getData(details, imageURL,date)
    // setActive("3")
    setTab("installer")
  }
  return (

    <>
      <div className='details'>
        <Input bname="Customer Name" name="customerName" placeholder="Example : John Doe" type="text" handleChange={handleChange} />
        <Input bname="Email" name="email" placeholder="123@mail.com" type="text" handleChange={handleChange} />
        <div className='input-container'>
          <p className='field-name'>Date</p>
          <Calendar dateFormat="dd/mm/yy" value={date} onChange={(e) => setDate(e.value)} className="input" />
          {/* <input placeholder={placeholder} min={min} value={val} type={type} className="input" name={name} onChange={handleChange} /> */}
        </div>
        {/* <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text" handleChange={handleChange} /> */}
        <Signature active={active} enable={enable} setImageURL={getSignatureValue} imageURL={imageURL} />
        <Button name="Proceed Next" disable={disabled} page="customer" func={getStep} />
      </div>
    </>

  )
}

export default Customer

// 