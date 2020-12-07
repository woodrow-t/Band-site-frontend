import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'
import {Item} from './Item'
import '../styles/Merch.scss'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Merch = (props) => {
    const[entries, setEntries] = useState([]);
    useEffect(() => {
        client.getEntries ({
        'content_type': 'merchandise'
        })
        .then((response) => {
        setEntries(response.items);
        console.log(response.items);
        });
    }, []);
    
    // useEffect(() => {
    //     client.getAsset ({
    //     'content_type' : 'merchandise'
    //     })
    //     .then((response)=> {response.json())
    //     .then((data)=>setAssets(data))
    //     });
    // }, [])
    const [clicked, setClicked] = useState("");

    const handleClick = () => {
    setClicked(!clicked);
    };

    const Merch =  entries.map((entry) => (
        <Item entry={entry} />
    ))
    return (
        <div className='merch'>
            <h1 className='title'>Metal Merch</h1>
            <div className='merch'>
                {Merch}
            </div>
        </div>
    )
}