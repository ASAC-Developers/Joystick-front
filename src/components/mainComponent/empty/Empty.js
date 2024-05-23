import React ,{useContext} from 'react'
import './Empty.css'
import EmptyImage from '../../../assets/emptyPage.png'
import { ThemeContext } from '../../theme/ThemeContext';


export default function Empty() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
    <div className='emptyContainer'>
    <img src={EmptyImage} alt='EmptyImage ' className='emptyImage' />
    <h3 className='emptyText'>No favorites yet. Add some games to get started!</h3>
    </div>
    </div>
  )
}
