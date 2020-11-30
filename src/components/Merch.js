import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Merch = (props) => {
    const[entries, setEntries] = useState([]);
    const[assets, setAssets] = useState([])
    useEffect(() => {
        client.getEntries ({
        'content_type': 'merchandise'
        })
        .then((response) => {
        setEntries(response.items);
        });
    }, []);
    
    useEffect(() => {
        client.getAsset ({
        'content_type' : 'merchandise'
        })
        .then((response) => {
        setAssets(response.fields.file.url)
        });
    }, [])

    const Shirts = assets.map

    const Merch =  entries.map((entry) => (
        <div className='entry' key={entry.sys.id}>
        <p>{entry.fields.name}</p>
            
        <p>{entry.fields.description}</p>
        </div>
    ))
    return (
        <div className='merch'>
            <h1>Metal Merch</h1>
            <div className='entries'>
                {Merch}
            </div>
        </div>
    )
}