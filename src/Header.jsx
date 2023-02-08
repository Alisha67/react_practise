import React, { useState } from 'react'

const Header = () => {
const [inputData,setData]=useState();

function handleChange(e){
setData(e.target.value);
}

  return (
    <div>
 <h3 className='header_tittle'>Implementing Filter ,Search and Sort using json server</h3>
 <form class="example">
  <input type="text" placeholder="Search.." name="search2" onChange={handleChange} />
  <button type="submit"><i class="fa fa-search"></i></button>
</form>


    </div>
  )
}

export default Header