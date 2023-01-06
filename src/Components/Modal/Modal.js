import React from 'react'
import Input from '../Inputs/Input'
import { AiFillCloseCircle } from 'react-icons/ai'
import './Modal.css'
import datas from '../../Data/items.json';
import { useState } from 'react'

function Modal({ setShow, itemNo,setItemVal, onSelect }) {
    const [hover, setHover] = useState("")
    const [search, setSearch] = useState("")
    const [data, setData] = useState(datas)
    const handleChange = (e) => {
        console.log("testament", e.target.value)
        setSearch(e.target.value);
        setItemVal(search)
    };
    const mouseOver = (event, name) => {
        setHover(name)
    }
    return (
        <div>
            <div className="overlay">
                <div className="modal">
                    <div className='modal-row'><div className='close' onClick={() => { setShow(false) }}><AiFillCloseCircle /></div></div>
                    <div className='item-box'>
                        <Input bname={`Select Item #` + itemNo} val={search} name={itemNo} handleChange={handleChange} />
                        <div className='item-container'>
                            {
                                data.length < 1067 ? (
                                    <div>loading</div>
                                ) : (
                                    data.map((item, index) => {
                                        if (item.Name.toString().toLowerCase().includes(search.toString().toLowerCase()) || search === '') {

                                            return (<> {hover == item.Name ?  <div key={index} onClick={(e)=>{setSearch(item.Name);onSelect(itemNo, item.Name)}} className="item-hover">{item.Name}</div>
                                                : <div key={index}  onMouseOver={() => { setHover(item.Name) }} className="item">{item.Name}</div>}</>)
                                        }
                                    })

                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal