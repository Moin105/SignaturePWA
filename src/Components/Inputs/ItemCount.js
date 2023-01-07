import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import './input.css'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
function ItemCount({ bname, name, indi, placeholder, type, onSelect }) {
    const [show, setShow] = useState(false)
    const [itemVal, setItemVal] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [count, setCount] = useState(1)

    const getValue = (index, value) => {
        setItemVal(value)
        console.log('check values', index, value, quantity)
    }
    useEffect(() => {
        onSelect(indi, itemVal, quantity)
    }, [itemVal])

    const addItem = () => {
        console.log("clicked");
        setQuantity(quantity + 1);
        onSelect(indi, itemVal, quantity + 1);
    }

    const removeItem = () => {
        setQuantity(quantity - 1);
        onSelect(indi, itemVal, quantity - 1)
    }


    return (
        <div className='input-row'>
            <div className='input-item'>
                <p className='field-name'>Item {indi}</p>
                <input placeholder="Select Item" type="" style={{ width: '210px', maxWidth: '210px', marginRight: '10px' }} className="item" defaultValue={itemVal} readOnly={true} name={name} onClick={() => { setShow(true); }} />
            </div>
            <div className='input-quantity' style={{ marginLeft: '20px' }}>
                <p className='field-name'>Quantity</p>
                <p className='plus' style={{ color: '#E2E3E3', marginLeft: '1px' }} onClick={() => { addItem() }}><AiFillPlusSquare /></p>
                <p className='minus' style={{ color: '#E2E3E3' }} onClick={() => { removeItem() }} ><AiFillMinusSquare /></p>
                <input placeholder={placeholder} type="number" style={{ width: '50px', paddingRight: '10px', paddingLeft: '55px' }} className="quantity" onChange={(e) => { setQuantity(e.target.value); onSelect(indi, itemVal, quantity) }} value={quantity} name={name} />
            </div>
            {show && <Modal key={indi} itemNo={indi} onSelect={getValue} setItemVal={setItemVal} setShow={setShow} />}
        </div>
    )
}

export default ItemCount