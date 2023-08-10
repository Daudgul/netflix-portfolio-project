import React, { useEffect, useState } from 'react'
import './PlansScreen.css'

function PlansScreen() {
    const [date, setDate] = useState()
    // Create a new Date object
    var currentDate = new Date();

    // Add 15 days
    currentDate.setDate(currentDate.getDate() + 15);
    
    // Get the year, month, and day components
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Adding 1 since months are zero-indexed
    var day = currentDate.getDate();
    
    // Format as numeric date (YYYY-MM-DD)
    var formattedDate = year + '/' + (month < 10 ? '0' : '') + month + '/' + (day < 10 ? '0' : '') + day;
    useEffect(() => {
        setDate(formattedDate)
    }, [])
  return (
    <div className='plansScreen'>
       Renewal date: {date}
       <div className="plansScreen__plan">
        <div className="plansScreen__info">
            <h5>Premium</h5>
            <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="plansScreen__plan">
        <div className="plansScreen__info">
            <h5>Basic</h5>
            <h6>720p</h6>
        </div>
        <button>Subscribe</button>
       </div>
       <div className="plansScreen__plan">
        <div className="plansScreen__info">
            <h5>Standard</h5>
            <h6>1080p</h6>
        </div>
        <button style={{ backgroundColor: 'gray'}}>Current Package</button>
       </div>
    </div>
  )
}

export default PlansScreen