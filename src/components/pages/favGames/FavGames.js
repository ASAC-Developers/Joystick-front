import React, { useContext, useState } from 'react'
import FavCard from './../../mainComponent/favCard/FavCard';
import './FavGames.css';
 
import Empty from '../../mainComponent/empty/Empty';
import { ThemeContext } from '../../theme/ThemeContext';

 
 
 
function FavGames() {
  const { theme } = useContext(ThemeContext);

 
  const [favoriteGames, setFavoriteGames] = useState(JSON.parse(localStorage.getItem('fav')) || []);
 
 
  function onReload(){
   
    setFavoriteGames(JSON.parse(localStorage.getItem('fav')) || []);
 
  }
 
 
  return (
   
      <div id={theme}>
       <div className='cardsContainer' >
     
      {favoriteGames.length == 0 ? <Empty /> :
       favoriteGames.map((item)=>{
          return <FavCard key={item.id} item={item} onReload={onReload}/>
        })}
      </div>
      </div>
   
  );
}
 
export default FavGames