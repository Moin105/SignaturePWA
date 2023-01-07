import React, { useState, useEffect, useCallback } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
var temp;
temp = { item: "", count: "" }
function ItemDetails({ setTab, itemDetails, setItemDetails, setActive }) {
    const [disable, setDisable] = useState(true)
    const [details, setDetails] = useState({
        businessName: "",
        itemCount: 0,

    });
    const [initialCount, setInitialCount] = useState(0)
    const [trues, setTrues] = useState(0)

    const [itemArr, setItemArr] = useState([])

    const getValuesInParent = (index, value, quantity) => {
        let t = itemArr
        itemArr[index - 1] = { item: value, count: quantity }
        setItemDetails(t, details)
        console.log("old testament234324234234324", t, itemArr); console.log("asdewf", itemDetails)

        checkItemVal()
        // if (t[index - 1].item !== '') { setTrues(trues + 1) }
    }
    const disablebtn = () => {
        setDisable(true)
    }
    const checkInputs = () => {
        console.log("bsdk")
        if (details.item == (0 || NaN || "") || details.businessName == "") {
            setDisable(true)
        }
        if (details.businessName !== "" && details.item == (0 || NaN || "")) {
            setDisable(false)
        }
    }

    useEffect(() => {
        checkInputs()
    }, [details])

    const checkItemVal = () => {

        if (details.item !== (0 || NaN || "") && details.businessName !== "") {
            let check = false
            console.log("halsey", itemArr.length, trues)
            itemDetails.forEach((item) => {
                if (item.item == "") {
                    check = true
                } else {
                    check = false
                }
            })
            setDisable(check)
        }
    }
    const updateCount = (count) => {
        return setInitialCount(prev => prev = parseInt(count))
    }

    const checkItemCount = () => {
        console.log("initail", details.itemCount, initialCount)
        if (details.itemCount !== (0 || NaN || "")) {
            updateCount(details.itemCount)
        }
        if (details.itemCount > initialCount) {
            updateCount(parseInt(details.itemCount))
        }
        if (details.itemCount == initialCount) {
            console.log("initial render")
        }
    }
    let d = []
    useEffect(() => {
        console.log("ap dhillon")

        for (var i = 1; i <= (itemArr.length > 0 ? (initialCount - itemArr.length) : initialCount); i++) {
            d = [...d, temp]
        }
        setItemArr(d)
        setItemDetails(itemArr)
        // window.alert(initialCount  , itemArr.length,itemDetails)

        console.log("older testament", initialCount, details.length, itemArr.length)

    }, [details])

    useEffect(() => {
        if (details.itemCount !== 0) {
            checkItemCount()
        }
    }, [details.itemCount])
    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
        if (details.businessName !== "") { setDisable(false) }
    };
    const getStep = () => {
        // setActive("2")
        setTab("customer")
    }
    return (

        <>
            <div className='details'>
                <Input bname="Business Name" name="businessName" placeholder="Example: XYZ Co." type="text" handleChange={handleChange} />
                <Input bname="Number of items" name="itemCount" placeholder="Please Enter The Number Of Items" type="number" handleChange={handleChange} />
                <div className='count-container'>
                    {
                        Array.from({ length: initialCount }).map((name, index) => {
                            return <ItemCount key={index} name={name} onSelect={getValuesInParent} indi={index + 1} />
                        })
                    }
                </div>
                <Button name="Proceed Next" disable={disable} func={getStep} />
            </div>
        </>

    )
}

export default ItemDetails

// 