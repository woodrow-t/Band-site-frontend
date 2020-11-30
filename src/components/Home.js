import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import * as Contentful from 'contentful'
import '../styles/Home.scss'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Home = (props) => {
    return (
        <div className='home'>
            <h1 className='title'>Hello I'm Home</h1>
            
            <div className= 'adspace'>  
                <Link to= '/merch'>
                    <h1>SALE!!!</h1>
    
                    <p>Check out the latest gear!</p>
    
                    <img src= 'https://imgur.com/DeFMtPr.jpg'/>
                </Link>
            </div>

            <Link className='tours-link' to='/tours'>
                <h3>Where are we?</h3>
            </Link>
        </div>
    )
}