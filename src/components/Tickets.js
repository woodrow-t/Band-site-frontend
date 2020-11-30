import React, { useState, useEffect } from "react";
import * as Contentful from 'contentful'

const client = Contentful.createClient({
  space: '5rgn7vd3jtfe',
  accessToken: '5v8Y6-15fcM7Ms3jsvxX5MFzME1COBGrf7NZJJkY4lY'
})

export const Tickets = (props) => {
    return (
        <div className='tickets'>
            <h1 className='title'>Get your tickets today!</h1>
        </div>
    )
}