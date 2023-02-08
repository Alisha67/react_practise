import React from 'react'
import Filter from './Filter'

const Tabledata = (props) => {
  return (
<>


    <div className='table_container'>
     
<div className="container ">
<h6>Detail Data</h6>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Student_id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">College</th>
      <th scope="col">Faculty</th>

    </tr>
  </thead>
  <tbody>
{/* {props.dataarr.map((item,index)=>{
  return(
    <tr key={index}>
    <th scope="row">{item.studid}</th>
    <td>{item.firstname}</td>
    <td>{item.lastname}</td>
    <td>{item.college}</td>
    <td>{item.faculty}</td>
  </tr>

  )
}


)} */}

   
   
  </tbody>
</table>
</div>

    </div>
    </>
  )
}

export default Tabledata