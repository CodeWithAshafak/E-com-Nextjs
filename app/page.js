import Header from './Componets/Header'
import Footer from './Componets/Footer'
import Slider from './Componets/Slider';
import Surprice from './Componets/Surprice';
import Favourite from './Componets/Favourite';
import Favouriterow from './Componets/Favouriterow';
import Giftspark from './Componets/Giftspark';
import Samedelivery from './Componets/Samedelivery';
import Banner from './Componets/Banner';
import Testimonials from './Componets/Testimonials';
import Overseas from './Componets/Overseas';
import Sellinggifts from './Componets/Sellinggifts';
import Personalized from './Componets/Personalized';
import Treat from './Componets/Treat';
import SurpirceChild from './Componets/SurpirceChild';
import StatsSection from './Componets/StatsSection';
import First from './Componets/First';
import Second from './Componets/Second';
import Cart from './Componets/Cart';


export default function Home() {
  return (
    <>
    
<Header/>



  <First/>
  <Second/>
    <Slider/>
    <Surprice/>
    <Favourite/>

    <Favouriterow/>
    <Cart/>
    <Giftspark/>
    <Samedelivery/>
    <Banner/>
    <Sellinggifts/>
    <Overseas/>
    <Personalized/>
    <Treat/>
    <SurpirceChild/>
    <Testimonials/>
     <StatsSection/>

    
    <Footer/>
    </>     
  );
}
