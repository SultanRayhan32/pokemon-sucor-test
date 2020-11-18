import React from 'react'

// MODULE
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// STYLE
import './style.css'

// COMPONENT
import Navbar from '../../Component/Navbar'
import LeftContent from './leftContent'
import RightContent from './rightContent'
import Loader from '../../Component/Loader'


function Detail (props) {

    const name = props.match.params.name

    const QUERY = gql`
        query {
            pokemon(name:"${name}") {
                name
                image
                weight {
                    minimum
                    maximum
                }
                height {
                    minimum
                    maximum
                }
                classification
                types
                evolutions {
                    name
                    image
                }
            }
        }
    `

    let { data } = useQuery(QUERY)

    if (data) {
        return (
            <div className="detail-style">
                <Navbar/>
                <div className="detail-container">

                    <LeftContent data={data}/>

                    <RightContent data={data}/>
                    
                </div>
            </div>
        )
    } else {
        return (
            <div style={{width : "100%", display : "flex" , justifyContent : "center", alignItems : "center", marginTop : 100}}>
                <Navbar/>
                <Loader/>
            </div>
        )
    }

}

export default Detail