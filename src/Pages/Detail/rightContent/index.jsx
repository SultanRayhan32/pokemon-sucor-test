import React from 'react'

// COMPONENT
import BoxDetail from '../boxDetail'

function RightContent (props) {

    const { data } = props

    const dataPokemon = data.pokemon

    return (
        <div className="right-content">
            <BoxDetail
                title={"Weight Range"}
                value={`${dataPokemon.weight.minimum} - ${dataPokemon.weight.maximum}`}
            />
            <BoxDetail
                title={"Height Range"}
                value={`${dataPokemon.height.minimum} - ${dataPokemon.height.maximum}`}
            />
            <BoxDetail
                title={"Classification"}
                value={`${dataPokemon.classification}`}
            />
            <BoxDetail
                title={"Types"}
                value={`${dataPokemon.types}`}
            />
        </div>
    )

}

export default RightContent