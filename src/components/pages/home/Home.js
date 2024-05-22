import React ,{useContext} from 'react'
import Banner from '../../mainComponent/banner/Banner';
import Cards from '../../mainComponent/cards/Cards';
import BarCard from '../../mainComponent/barCard/BarCard';
import { ThemeContext } from '../../theme/ThemeContext';
import './Home.css'

function Home() {

  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme}>
    <Banner/>
    <BarCard/>
    <Cards/>
    </div>
  )
}

export default Home
