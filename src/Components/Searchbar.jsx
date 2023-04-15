import React from 'react'
import '../styles/Background.css'


function Searchbar() {
  return (
    <div className='input-group'>
        <label></label>
    <input type='text' id='name' value='Search by name' className='input-text'/>
    </div>
  )
}

export default Searchbar