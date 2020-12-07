import React from "react"
import {Link} from "react-router-dom";
import "../styles/NavBarDesk.scss"

export const NavBarDesk = (props) =>{
    return (
            <div className="navbardesk">
                <Link to="/"><p>Home</p> </Link>
                <Link to="/tours/"><p>Tour Dates</p></Link>
                <Link to="/tickets"><p>Tickets</p></Link>
                <Link to="/merch"><p>Merch</p></Link>
                <Link to="/aboutus"><p>About Us</p> </Link>
                <Link to="/gallery"><p>Gallery</p> </Link> 
            </div>
    )
}