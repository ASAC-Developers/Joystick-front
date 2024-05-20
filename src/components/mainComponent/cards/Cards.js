import React from 'react'
import Card from '../card/Card'
import './Cards.css'
const gamesData = require( '../../../data/games.json');

function Cards() {
  
  return (
    <>
    <p className='cardSectiontext' style={{"color": "white"}}>let's play!</p>
    <div className="cards-list">
    
      {
        gamesData.map((item)=>{
          return <Card item={item}/>
        })
      }
      
    </div>
    </>
  )
}

export default Cards
