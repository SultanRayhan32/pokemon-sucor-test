import React , { useState , useEffect  } from 'react'

// MODULE
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import InfiniteScroll from 'react-infinite-scroller';

// STYLE
import './style.css'

// COMPONENT
import Navbar from '../../Component/Navbar'
import Loader from '../../Component/Loader'

function Home () {

    // LOCAL STATE
    const [num,setNum] = useState(12)
    const [dataPokemon,setDataPokemon] = useState([])

    // QUERY
    const QUERY = gql`
    query {
        pokemons(first:${num}) {
          name
          image
        }
    }
    `
    //Load More
    let addNum = () => {
        setNum(num+3)
    }

    // HISTORY
    const history = useHistory()

    // GRAPHQL DATA
    let { data } = useQuery(QUERY)

    // RENDER DATA
    let renderData = () => {
        return dataPokemon.map((el,index)=>{
            return (
                <div 
                    className="list-pokemon-box" 
                    key={index}
                    onClick={e=>history.push(`/${el.name}`)}
                >
                    <div className="list-pokemon-box-img">
                        <img 
                            src={el.image} 
                            alt={el.image + "-app"}
                        />
                    </div>
                    <div className="list-pokemon-box-content">
                        {el.name}
                    </div>
                </div>
            )
        })
    }

    useEffect(()=>{
        if (data) {
            setDataPokemon(data.pokemons)
        }
    },[data])

    return (
        <div className="home-container">            
            
            <Navbar/>
            <InfiniteScroll
                initialLoad={false}
                loadMore={addNum}
                hasMore={  dataPokemon.length < 151 ? true : false}
                loader={(
                    <div style={{width : "100%", display : "flex" , justifyContent : "center", alignItems : "center", marginTop : 40}}>
                        <Loader/>
                    </div>
                )}
                className="list-pokemon-container"
            >
                {
                        dataPokemon && renderData()
                }
                   
            </InfiniteScroll>

        </div>
    )

}

export default Home;