import React from 'react'
import "./Hero.css"
import{ImLocation} from "react-icons/im"







function Hero(props) {
  return (
    <div className='main-container'>
    <div className='main'>
      <div className='image-container flex'>
      <img src={`/Asset/${props.imageUrl}`} alt='beautiful places' className='img-location'/>
      </div>
      <div className='content flex'>
        <div className='location'>
          <span><ImLocation className='location-icon'/></span>
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>view on Google Maps</a>
        </div>
        <h1 className='title'>{props.title}</h1>
        <strong><h4 className='date'>{props.startDate}-{props.endDate}</h4></strong>
        <p className='description'> {props.description} </p>
      </div>
    </div>
    <hr/>
    </div>
  )
}

export default Hero