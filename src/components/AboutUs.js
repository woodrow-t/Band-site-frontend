import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'
import '../styles/AboutUs.scss'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const AboutUs = (props) => {
    const[entries, setEntries] = useState([]);

    useEffect(() => {
        client.getEntries ({
        'content_type': 'bandBlog'
        })
        .then((response) => {
        setEntries(response.items);
        });
    }, []);

    const Blog =  entries.map((entry) => (
        <div className='entry' key={entry.sys.id}>
        <p className= 'blog-entry-title'>{entry.fields.title}</p>
        <p>{entry.fields.date}</p>
        <p>{entry.fields.blogText}</p>
        </div>
    ));
    return (
        <div className='about-us'>
            <h1 className='title'>About the band</h1>
            <div className='blog'>
                {Blog}
            </div>
        </div>
    )
}