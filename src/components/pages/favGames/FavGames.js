import React, {  useState ,useContext} from 'react'
import FavCard from './../../mainComponent/favCard/FavCard';
import './FavGames.css';
import Empty from '../../pages/empty/Empty';
import { ThemeContext } from '../../theme/ThemeContext';



function FavGames() {

  const [favoriteGames, setFavoriteGames] = useState(JSON.parse(localStorage.getItem('fav')) || []);
  

  function onReload(){
    
    setFavoriteGames(JSON.parse(localStorage.getItem('fav')) || []);

  }

  const { theme } = useContext(ThemeContext);

  return (
    
      <>
       <div className='cardsContainer'>
      
      {favoriteGames.length == 0 ? <Empty /> : 
       favoriteGames.map((item)=>{
          return <FavCard key={item.id} item={item} onReload={onReload}/>
        })}
      </div>
      </>
    
  );
}

export default FavGames
