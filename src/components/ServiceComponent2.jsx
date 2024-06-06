import React from 'react'
import "../components/css/ServiceComponent2.css"
import img_bike from "../images/bike2.jpg"

const ServiceComponent2 = () => {
  return (
    <div class="alldiv">
        <img class="img_bikee" src={img_bike}></img>
        <div class="all_text">
            <b class="pi">Free of charge for<br/> employers</b>
            <p class="pi2">The bike plan is totally independent of the WKR and is free for you as<br/>
            an employer. The employee pays the lease costs and you, as the<br/>
            employer, decide whether you want to contribute to the costs.</p>
            <button class="Cost_example"><b>Cost example</b></button>
        </div>
    </div>
  )
}

export default ServiceComponent2