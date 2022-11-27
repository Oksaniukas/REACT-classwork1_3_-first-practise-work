import React from "react";

function Card(props) {
   console.log(props)
   return (
      <div className="card-items"> 
            <div className='card'>
               <img src={props.data.img} />
               <h1>{props.data.title}</h1>
               <div>{props.data.description}</div>
            </div>
      </div>
   )
}

export default Card