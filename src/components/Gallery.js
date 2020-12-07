import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'
import '../styles/Gallery.scss'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Gallery = (props) => {
    const[entries, setEntries] = useState([]);
    useEffect(() => {
        client.getEntries ({
        'content_type': 'gallery'
        })
        .then((response) => {
        setEntries(response.items);
        console.log(response.items);
        });
    }, []);

    const Gallery =  entries.map((entry) => (
        <div key={entry.sys.id}>
            <img src={entry.fields.image.fields.file.url} />
        </div>

    ))

    return (
        <div className='gallery'>
            {Gallery}
        </div>
    )
}
