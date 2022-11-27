import React from 'react';
import data from "../data";
import Card from "./Product";

function Main() {
   // const first = data[0];
   // const second = data[1];
   // const third = data[2];
   // const fourth = data[3]
 
   let list = data.map(card => {
      return <Card data={card}/>
   })

   return (
      <div className='card-wrapper'>
         {list}
      </div>
   )
}

/* <Card data={first} />;
         <Card data={second} />;
         <Card data={third} />;
         <Card data={fourth} /> */

export default Main