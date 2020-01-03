import React from 'react'
import './card.css'
export const Card =(props)=>(
  <div>
    <h2 className="card-container">
        <img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>{props.monster.name}
    </h2>
  </div>
)