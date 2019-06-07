import React, { Component } from 'react';
import Card from './Card';
import PT from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map((card,i)=>(
        <Card 
          card={card}
          key={i}
        />
      ))}
          
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes={
  cards:PT.arrayOf(PT.shape({
    author:PT.string,
    headline:PT.string,
    img:PT.string,
    tab:PT.string
  }))
}

export default Cards;