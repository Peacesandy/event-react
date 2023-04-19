import React from 'react'
import '../styles/Table.css'

function Table({data}) {
  return (
    <div className='grid'>
         {data.map(item =>(
            <ul key={item.id} className='list'>
                 <img className='profile1' src={item.picture} alt="profile"/>
                <li>{item.title}</li>
                <li>{item.firstName}</li>
                <li>{item.lastName}</li>
            </ul>
         ))}
    </div>
  )
}

export default Table