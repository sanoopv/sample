import React from 'react'

const Location = ({locations,locationChanged}) => {

    return (
        <select className='locationdropdown' name="" id="" onChange={(e)=>{locationChanged(e.target.value)}} >
            <option value="All">All locations</option>
            {locations.map((item,index)=><option key={index} value={item.name}>{item.name}</option>)}            
        </select>
    )
}

export default Location
