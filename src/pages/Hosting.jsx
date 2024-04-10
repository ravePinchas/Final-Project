import React, { useState } from 'react'
import { types } from '../services/stayTypes'

export default function Hosting() {
    const [isBeginningHosting, setIsBeginningHosting] = useState(true)
    const [isNameHosting, setIsNameHosting] = useState(false)
    const [isSummaryHosting, setIsSummaryHosting] = useState(false)
    const [isPriceHosting, setIsPriceHosting] = useState(false)
    const [isTypeHosting, setIsTypeHosting] = useState(false)
    const [isCapacityHosting, setIsCapacityHosting] = useState(false)
    const [isImagesHosting, setIsImagesHosting] = useState(false)
    const [isAmenitiesHosting, setIsAmenitiesHosting] = useState(false)
    const [countArr, setCountArr] = useState(0)

    const typesHosting = types

    const [stayHosting, setStayHosting] = useState({
        name: "",
        type: ['test'],
        imgUrls: ["/images/stay01.webp", "/images/stay01d1.webp", "/images/stay01d2.webp", "/images/stay01d3.webp","/images/stay01d4.webp"],
        price: 995,
        added: "Added 10 weeks ago",
        dates: "Feb 25 - Mar 1",
        summary: '',
        capacity: 6,
        amenities: [
            "TV",
            "Wifi",
            "Kitchen",
            "Beach",
            "Pool",
            "Washer",
            "Pingpong-table"
        ],
        host: {
            _id: "u101",
            fullname: "Davit Pok",
            imgUrl: "/images/host/host01.webp",
        },
    });
    

    function onUpdateNextHosting() {
        //beginning
        setCountArr(countArr + 1)
        switch (countArr) {
            case 1: //name
            console.log("stayHosting: ", stayHosting);
                setIsNameHosting(true)
                setIsBeginningHosting(false)
                break;
            case 2: //type
                setIsNameHosting(false)
                setIsTypeHosting(true)
                break;
            case 3: //price
            console.log("stayHosting: ", stayHosting);
            console.log("stayHosting: ", stayHosting).type;
                setIsTypeHosting(false)
                setIsPriceHosting(true)
                break;
            case 4: //summary
                setIsPriceHosting(false)
                setIsSummaryHosting(true)
                break;
            case 5://capacity
                setIsSummaryHosting(false)
                setIsCapacityHosting(true)
                break;
            case 6: //amenities
                setIsCapacityHosting(false)
                setIsAmenitiesHosting(true)
                break;
            case 7://images
                setIsAmenitiesHosting(false)
                setIsImagesHosting(true)
                break;
            default:
                break;
        }
    }
    function handleChange(event) {
        const { name, value, checked } = event.target;
        if (value !== null) {
            setStayHosting(prevStayHosting => ({
                ...prevStayHosting,
                [name]: value
            }));
        }
        if (checked === true) {
            console.log("check?", checked);
            setStayHosting(prevStayHosting => ({
                ...prevStayHosting,
                [name]: name
            }));
        }
    }
    
  return (
    <section className='hosting-container'>
        <header><h1>welcome</h1></header>

        <div className='body-hosting'>
            {isBeginningHosting && <h2>Let's start to add a stay for hosting!</h2>} 
            {isBeginningHosting && <button onClick={onUpdateNextHosting}>Ok! let's start!</button>}

            {isNameHosting && <form onSubmit={onUpdateNextHosting}> 
                <h2>what is the name of the place?</h2> 
                <input type='text' name='name' value={stayHosting.name} onChange={handleChange} required/>
                <button type='submit'>submit</button>
            </form>}
            {isTypeHosting && (
    <div>
        <h2>What are the types of hosting?</h2>
        <form onSubmit={onUpdateNextHosting}>
            {typesHosting.map((type, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        id={type}
                        name={type}
                        checked={stayHosting[type]}
                        onChange={handleChange}
                    />
                    <label htmlFor={type}>{type}</label>
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    </div>
)}
        </div>
      
    </section>
  )
}
