import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import './InstallerDetails.css'
function InstallerDetails({ getInstallerData }) {
  const [disable, setDisable] = useState(true)
  const [details, setDetails] = useState({
    installerName: "",
    notes: "",
  });
  var itemsArr = []
  useEffect(() => {
    if (details.installerName !== "" || details.notes !== "") {
      setDisable(false)
    }
  }, [details])

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const getStep = () => {
    // setActive("2")
    getInstallerData(details)
    window.alert("hello your form submited")
  }
  return (

    <>
      <div className='installer-details'>
        <Input bname="Installer Name" name="installerName" placeholder="Steven Strange" type="text" handleChange={handleChange} />
        {/* <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text"  handleChange={handleChange}/> */}
        <div className='input-message'>
          <p className='field-message'>Add Notes</p>
          <textarea placeholder="Add comments here.." type="text" className="message" name="notes" onChange={handleChange} />
        </div>
        <Button name="Proceed Next" disable={disable} func={getStep} />
      </div>
    </>

  )
}

export default InstallerDetails

