import React from 'react'

function BoxDetail (props) {

    const { title , value } = props

    return (
        <div style={{width : "100%"}}>
            <div className="title-black-content">
                {title}
            </div>
            <div className="content-value">
                {value}
                {/* {data.pokemon.weight.minimum} - {data.pokemon.weight.maximum}  */}
            </div>
        </div>
    )

}

export default BoxDetail