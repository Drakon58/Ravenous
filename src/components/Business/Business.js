import React from 'react';
import './business.scss'

export const Business = (props) => {
  return (
    <div className="Business">
      <div className="image-container">
        <a  href={props.business.link}>
          <img src={props.business.imageSrc} alt=''/>
        </a>
      </div>
      <h2>{props.business.name}</h2>
      <div className="Business-information">
        <a href={`https://www.google.ca/maps/place/${props.business.address.replace(" ","+")}`}>
        <div className="Business-address">
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{props.business.state} {props.business.zipCode}</p>
        </div>
</a>
        <div className="Business-reviews">
          <h3>{props.business.category}</h3>
          <h3 className="rating">{props.business.rating} stars</h3>
          <p>{props.business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}
