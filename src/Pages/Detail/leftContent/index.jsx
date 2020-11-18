import React from 'react'

function LeftContent (props) {

    const { data } = props

    
    let renderEvo = () => {
        return data.pokemon.evolutions.map((el,index)=>{
            return (
                <div className="content-evo-item">
                    <img src={el.image} alt={"evo-pokemon"}/>
                    <div>
                        {el.name}
                    </div>
                </div>
            )
        })
    }
    
    return (
        <div className="left-content">
    
            <div className="image-content">
                <img src={data.pokemon.image} alt={"pokemon-detail"}/>
            </div>

            <div className="title-black-content">
                Evolutions
            </div>

            <div 
                className="content-value-2"
                style={{
                    paddingLeft : !data.pokemon.evolutions && "2%",
                    width : !data.pokemon.evolutions && "98%"
                }}
            >
                { data.pokemon.evolutions ? renderEvo() :"-" }
            </div>

        </div>
    )

}

export default LeftContent