import React from 'react'
import './Empty.css'
import EmptyImage from '../../../assets/emptyPage.png'
export default function Empty() {
  return (
    <div>
          {/* star background   */}
    <div className="sky">
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
  </div>
    <div className='emptyContainer'>
    <img src={EmptyImage} alt='EmptyImage ' className='emptyImage' />
    <h3 className='emptyText'>No favorites yet. Add some games to get started!</h3>
    </div>
    </div>
  )
}
