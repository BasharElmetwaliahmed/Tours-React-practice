import React, { useState } from 'react'

function Tour({tour,removetour}) {
    const [readMore,setReadMore]=useState(true);
    console.log(removetour)

  return (
    <div className='Tour' >
        <img src={tour.image}></img>
   <div class="Text">
            <div className='Heading'>
      <h2>{tour.name}</h2>
      <h3> {tour.price}</h3>
        </div>
        <p>{readMore?tour.info.slice(0,100):tour.info}
        <button className='show' onClick={()=>{setReadMore(!readMore)}}>...{readMore?"showmore":"showless"}</button></p>
        <button className='delete' onClick={()=>{removetour(tour.id)}}>Not interested</button>
   </div>
    </div>
  )
}

export default Tour