import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import * as Contentful from 'contentful'
import '../styles/Home.scss'

export const Home = (props) => {
    return (
        <div className='home'>
            <h1>Hello I'm Home</h1>
            
            <div className= 'adspace'>  
                <h1>SALE!!!</h1>

                <p>Check out the latest gear!</p>

                <img src= 'https://imgur.com/DeFMtPr.jpg'/>
            </div>

            <Link className='tours-link' to='/tours'>
                <h3>Where are we?</h3>
            </Link>
        </div>
    )
}