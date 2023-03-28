import React from "react";
import image from "./imagee.jpeg"
import Eventcard from "./Eventcard";
export default function Event(){
    return(
        <div className="event-enlarge"
        style={{background:`url(${image})`,
        backgroundSize:"cover",backgroundPosition:"left"}} >
        </div>
    )
}