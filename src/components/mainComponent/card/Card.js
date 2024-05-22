import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <>
 
    <div>
      <Link to={`/singlegame/${props.item.id}`}>
       <div className="card 1">
          <div className="card_image"> <img src={props.item.image}/> </div>
        </div>
</Link>
        <h2 className='title-white' >{props.item.title}</h2>
    </div>
    
   
        </>
  )
}

export default Card
