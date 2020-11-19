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
import Filter from './Filter'

function Home () {

    // LOCAL STATE
    const [num,setNum] = useState(12)
    const [dataPokemon,setDataPokemon] = useState([])

    // FILTER STATE
    const [dataBackUp,setDataBackUp] = useState([])
    const [listType,setListTypes] = useState(['all'])
    const [selectedFilter,setSeletedFilter] = useState(null)
    const [isFilter,setIsFilter] = useState(false)

    // QUERY
    const QUERY = gql`
    query {
        pokemons(first:${num}) {
          name
          image
          types
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
        if (data && !isFilter) {
            let arr = ['all']
            data.pokemons.forEach(e=>{
                e.types.forEach(e2=>{
                    if (!arr.includes(e2)) {
                        arr.push(e2)
                    }
                })
            })
            setListTypes(arr)
            setDataPokemon(data.pokemons)
            setDataBackUp(data.pokemons)
        }
    },[data,isFilter])

    useEffect(()=>{

        if (selectedFilter) {
            if (selectedFilter !== 'all') {
                let result = []
                let tempArr = [...dataBackUp]
                tempArr.forEach(e=>{
                    e.types.forEach(e2=>{
                        if (e2 === selectedFilter) {
                            result.push(e)
                        }
                    })
                })

                setDataPokemon(result)
            }else {
                setIsFilter(false)
            }
        }

    },[selectedFilter,dataBackUp])

    return (
        <div className="home-container">            
            
            <Navbar/>
            <Filter
                listType={listType}
                selectedFilter={selectedFilter}
                setSeletedFilter={setSeletedFilter}
                setIsFilter={setIsFilter}
            />
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