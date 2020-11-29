import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'
import '../styles/Tours.scss'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Tours = (props) => {
    const[entries, setEntries] = useState([]);

    useEffect(() => {
        client.getEntries ({
        'content_type': 'tourDates'
        })
        .then((response) => {
        setEntries(response.items);
        });
    }, []);

    const Tours =  entries.map((entry) => (
        <div className='entry' key={entry.sys.id}>
        <p>{entry.fields.name}</p>
        <p>{entry.fields.address}</p>
        <p>{entry.fields.tourDates2021}</p>
        {/*  */}
        </div>
    ))
    return (
        <div >
            <h1>Tour Dates</h1>
            <div className='tours'>
                {Tours}
            </div>
        </div>
    )
}