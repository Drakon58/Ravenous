import React from 'react';
import './businessList.scss';
import {Business} from '../Business/Business'

export const BusinessList = (props) => {
  return(
    <div className="BusinessList">
      {
        props.businesses.map((business) => {
          return <Business key={business.id} business={business} />
        })
      }
    </div>
  );
}
