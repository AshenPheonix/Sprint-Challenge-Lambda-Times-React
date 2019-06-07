import React from 'react';
import PT from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}
        {props.card.headline}
      </div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img /* image source goes here */} />
        </div>
        <span>By {props.card.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes={
  card:PT.shape({
    author:PT.string,
    headline:PT.string,
    img:PT.string,
    tab:PT.string
  })
}

export default Card;
