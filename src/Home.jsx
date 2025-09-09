import React from 'react'
// import OtherP from './OtherP'
// import TrackEvent from "./Track"
// import Autoslide from "./Autoslide"
// import AboutP from './AboutP'
// import Credibility from './Credibility'
// import Management from './Management' 
// import CTA from "./CTA"
import Hero from "./components/Hero";
import TrackEvent from "./components/Track"
import OtherP from './components/OtherP';
import Autoslide from "./components/Autoslide"
import ShipmentMedia from "./components/Shipmentmedia"
//import ProdcutSection from './components/ProductSecction';
import AboutP from "./components/AboutP"
import Credibility from "./components/Credibility"
import Location from "./components/Location"
import Management from "./components/Management"
import CTA from "./components/CTA"



const Home = () => {
  return (
    < div className='container'>
    <Hero/>
       <TrackEvent/>
       <OtherP/>
       <Autoslide/>
    {/* <ProdcutSection/> */}
       <ShipmentMedia/>
       <AboutP/>
       
          <Credibility/>
          <Location />
          <Management />
          <CTA />
          {/* <Footer />  */}
    </div>
  )
}

export default Home
