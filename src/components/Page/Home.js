import React from 'react'
import NavBar from '../NavBarPage/NavBar'
import Hero from '../HeroPage/Hero'
import data from "../data"

function Home() {
  const places = data.map(
    function(place){
    return <Hero
      
      {...place}
      />
  })
  return (
    <div>
        <NavBar/>
        <section>
          {places}
        </section>
        
        
    </div>
  )
}

export default Home