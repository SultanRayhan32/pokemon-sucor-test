import React from 'react'

// MODULE
import { useHistory } from 'react-router-dom'

// STYLE
import './style.css'

function Navbar () {

    // HISTORY
    const history = useHistory()

    return (
        <div className="navbar">

            <div className="content-navbar">
                <div 
                    className="left-content-navbar"
                    onClick={e=>history.push('/')}
                >
                    <img style={{width : 30,height :30}} src={"https://pokedex.sokcoba.in/dist/assets/icon.svg"} alt={"logo"}/>
                    <span>POKEAPP</span>
                </div>
            </div>

        </div>
    )

}

export default Navbar