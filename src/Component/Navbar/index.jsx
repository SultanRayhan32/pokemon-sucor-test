import React from 'react'

// STYLE
import './style.css'

function Navbar () {

    return (
        <div className="navbar">

            <div className="content-navbar">
                <div className="left-content-navbar">
                    <img style={{width : 30,height :30}} src={"https://pokedex.sokcoba.in/dist/assets/icon.svg"} alt={"logo"}/>
                    <span>POKEAPP</span>
                </div>
            </div>

        </div>
    )

}

export default Navbar