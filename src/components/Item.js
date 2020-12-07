import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'
import '../styles/Merch.scss'



export const Item = (props) => {

    const [clicked, setClicked] = useState("");

    const handleClick = () => {
        setClicked(!clicked);
    };

    const entry = props.entry
    return (
        <div className='entry' >
            <p>{entry.fields.name}</p>
                <div className='product'>
                    <img onClick={handleClick} src={entry.fields.featuredImage.fields.file.url}  />
                    <h3 className={clicked ? "clicked" : ""} >Price</h3>
                </div>
            <p>{entry.fields.description}</p>
        </div>
    )
}