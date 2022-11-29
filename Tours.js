import React from 'react'
import Tour from './Tour'

function Tours({data,removeTours}) {
    console.log(removeTours)
    return (
    <div>
    <h1 className='ToursHead'>Tours</h1>
    {
        data.map(tour=>{
            return (
                <Tour tour={tour} removetour={removeTours} key={tour.id} ></Tour>
            )
        })
    }

    </div>
  )
}

export default Tours