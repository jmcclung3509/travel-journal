import React from "react"
import Header from "./components/Header"
import Journal from "./components/Journal"
import data from "./data"
import style from "./style.css"

export default function App () {
    const entry = data.map(item => {
        return (
            <div>
                <Journal 
                key={item.id}
                item={item}
                />  
            </div>
        )
    })
    return (
        <div >
            <Header />
            {entry}
        </div>
        
    )
}