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
     const [tempArr,setTempArr]= useState([])
    const [itemArr, setItemArr] = useState([])
let t = itemArr
    const getValuesInParent = (index, value, quantity) => {
          
        
        if(value !== '')
        setTempArr([...tempArr,{item:value,count:quantity}])
        itemArr[index - 1] = { item: value, count: quantity }
        // setItemDetails(t, details) uncomment imp
        console.log("old testament234324234234324", t, tempArr);
         console.log("asdewf", itemArr)
    
        checkItemVal()
        // if (t[index - 1].item !== '') { setTrues(trues + 1) }
    }
    const disablebtn = () => {
        setDisable(true)
    }
    const checkInputs = () => {
        // console.log("bsdk")
        // if (details.item == (0 || NaN || "") || details.businessName == "") {
        //     setDisable(true)
        // }
        // if (details.businessName !== "" && details.itemCount !== (0 || NaN || "") && tempArr.length == initialCount) {
        //     setDisable(false)
        // }
        // if(details.businessName == ""){
        //     setDisable(true)
        // }
        // else 
          if( initialCount == itemArr.length){
            if(initialCount == 0 &&  itemArr.length == 0) {
                setDisable(true)
                return
            }
             else{ if(details.itemCount !== (0 || '')  ){
                    if(details.businessName !== ""){
                        setDisable(false)
                    }else{
                        setDisable(true)
                    }
              }}
        }
        else{
            setDisable(true)
        }
    }

    useEffect(() => {
        checkInputs()
    }, [details,itemArr])

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
    // useEffect(() => {
    //     console.log("ap dhillon")
         
    //     // for (var i = 1; i <= (itemArr.length > 0 ? (initialCount - itemArr.length) : initialCount); i++) {
    //     //     // d = [...d, temp]
    //     // }
    //     setItemArr(d)
    //     // setItemDetails(itemArr)
    //     // window.alert(initialCount  , itemArr.length,itemDetails)

    //     console.log("older testament", d, d, d)

    // }, [details])
const [addAr,setAddAr]=useState([])
    useEffect(() => {
        console.log("getting items  before change",tempArr)
        if (details.itemCount !== 0) {
            checkItemCount()
     }
    //    setAddAr([...addAr,...itemArr])
        // setItemDetails(addAr,details)
        // itemDetails.push()
        // setItemArr([])
    }, [details.itemCount])
const getAddAr = ()=>{

    setItemDetails(itemArr,details)
}
    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
        if (details.businessName !== "") { setDisable(false) }
    };
    const getStep = () => {
        setItemDetails(itemArr,details)
        // setActive("2")
        setTab("customer")
    }
    return (

        <>
            <div className='details'>
                <Input bname="Business Name" name="businessName" placeholder="Example: XYZ Co." type="text" handleChange={handleChange} />
                <Input bname="Number of items"min={0}  name="itemCount" placeholder="Please Enter The Number Of Items" type="number" handleChange={handleChange} />
                <div className='count-container'>
                    {
                        Array.from({ length: initialCount }).map((name, index) => {
                            return <ItemCount key={index} addAr={addAr} getAddAr={getAddAr} name={name} onSelect={getValuesInParent} indi={index + 1} />
                        })
                    }
                </div>
                <Button name="Proceed Next" disable={disable} func={getStep} />
                {/* <div>
                    <hr></hr>
                      {itemArr.map(items=>{
                        return <div>{items.item +" fwewef " +items.count }</div>  
                    })}
                </div> */}
            </div>
        </>

    )
}

export default ItemDetails

// 