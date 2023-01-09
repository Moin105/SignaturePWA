import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import './input.css'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
function ItemCount({ bname, name, indi, placeholder, type, onSelect, getAddAr }) {
    const [show, setShow] = useState(false)
    const [itemVal, setItemVal] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [active, setActive] = useState(true)
    const [read, setRead] = useState(false)

    const getValue = (index, value) => {
        setItemVal(value)
        console.log('check values', index, value, quantity)
    }
    useEffect(() => {
        // onSelect(indi,itemVal,quantity)
        onSelect(indi, itemVal, quantity);

        getAddAr()
    }, [itemVal])

    const addItem = () => {
        console.log("clicked");
        if (active == true) { setQuantity(quantity + 1); }
        // onSelect(indi, itemVal, quantity + 1);
    }

    const removeItem = () => {
        if (quantity <= 1) {
            return
        } else { setQuantity(quantity - 1) }
        // onSelect(indi, itemVal, quantity - 1)
    }


    return (
        <div className='input-box'>
            <div className='input-row'>
                <div className='input-item'>
                    <p className='field-name'>Item {indi}</p>
                    <input placeholder="Select Item" type="" style={{ width: '210px', maxWidth: '210px', marginRight: '10px' }} className="item" defaultValue={itemVal} readOnly={true} name={name} onClick={() => { setShow(true); }} />
                </div>
                <div className='input-quantity' style={{ marginLeft: '20px' }}>
                    <p className='field-name'>Quantity</p>
                    <p className='plus' onClick={() => { addItem(); onSelect(indi, itemVal, quantity) }}><AiFillPlusSquare /></p>
                    <p className='minus' onClick={() => { removeItem(); onSelect(indi, itemVal, quantity) }} ><AiFillMinusSquare /></p>
                    <input placeholder={placeholder} min={1} type="number" className="quantity" onChange={(e) => { setQuantity(e.target.value); onSelect(indi, itemVal, quantity) }} value={quantity} name={name} />
                </div>

                {show && <Modal key={indi} itemNo={indi} onSelect={getValue} setItemVal={setItemVal} setShow={setShow} />}
            </div>
            <div className='btn-row'>
                {/* {  active &&   <button onClick={()=>{}}>add</button>} */}
            </div>
        </div>

    )
}

export default ItemCount