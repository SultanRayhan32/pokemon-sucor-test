import React from 'react'

// MODULE
import Dropdown from 'react-dropdown';

// STYLE
import 'react-dropdown/style.css';

function Filter (props) {

    const { listType , setSeletedFilter ,  setIsFilter } = props

    let handleFilter = (e) => {
        if (e.value !== 'all') {
            setSeletedFilter(e.value)
            setIsFilter(true)
        }else {
            setIsFilter(false)
            setSeletedFilter(null)
        }
    }

    return (
        <div style={{marginTop : 100}}>
            <Dropdown 
                options={listType}  
                placeholder="Select an Types" 
                onChange={e=>handleFilter(e)} 
            />
        </div>
    )

}

export default Filter;