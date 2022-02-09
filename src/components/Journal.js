import React from "react"

export default function  (props) {
    console.log(props)
    return (
            <div className = "journal-element">
                <img className= "main-photo" src={props.item.imageUrl} />
                <div className="main-content">
                    <div className = "location-map">
                        <img className = "pin" src="../images/location.png" alt = "pin symbol"/>
                        <span className= "location"> {props.item.location}</span>
                        <a href ={props.item.googleMapsUrl}> View on Google Maps </a>
                    </div>
                    <h1 className = "title"> {props.item.title}</h1>
                    <p className = "dates">{props.item.startDate} - {props.item.endDate} </p>
                    <p className =  "description"> {props.item.description}</p>
                </div>
            </div>
    )
}
