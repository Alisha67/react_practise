import React, { useState } from 'react'

const Filter = () => {
    const [data,setData]=useState({
        studid:"",
        firtname:"",
        lastname:"",
        faculty:"",
        college:""
    }

    );
//  for storing the data 
 const[dataarr,setDataarr]=useState([]);

function handleSubmit(e){
e.preventDefault();
}

function handleChange(e){
setData({...data,[e.target.name]:e.target.value});
console.log(setData);
}
let studid,firstname,lastname,faculty,college=data;
function AddItem(){
    setDataarr([...dataarr,{studid,firstname,lastname,faculty,college}]);
    console.log(dataarr);
    console.log(data);


}
  return (
    <div>
        <br />
        <br />
        <br />
<div className="filter_box">

<form onSubmit={handleSubmit}>
<h3>Filter</h3>
  <div class="row whole_part">
  <div class="col">
      <input type="text" class="form-control" value={data.studid} name="studid" placeholder="Student_id"  onChange={handleChange} />
    </div>
    <div class="col">
      <input type="text" class="form-control" value={data.firstname} name="firstname" placeholder="First name"  onChange={handleChange} />
    </div>
    <div class="col">
      <input type="text" class="form-control" value={data.lastname} name="lastname" placeholder="Last name"  onChange={handleChange}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" value={data.faculty} name="faculty" placeholder="Faculty"  onChange={handleChange}/>
    </div>
    <div class="col">
      <input type="text" class="form-control"  value={data.college} name="college" placeholder="College"  onChange={handleChange}/>
    </div>
    <div class="col">
   <button className='addbutton' onClick={AddItem} >Add</button>
    </div>
  </div>
</form>
</div>
<br />
    </div>
  )
}

export default Filter