import React from 'react';
import Badge from '../../assets/badge.png';
import './card.css';

const Card = ({ name, imageURL, finalPrice, inStock, sku }) => {
  const hb_product_codes = ['043243', '040173', '044233', '045925'];
  return (
    <div className='card'>
      {hb_product_codes.includes(sku) && (
        <img src={Badge} alt='' className='card__badge' />
      )}
      <img src={imageURL} alt='' className='card__image' />
      <h3 className='card__name'>{name}</h3>
      <h3 className='card__price'>£ {finalPrice}</h3>
      {inStock ? (
        <button className='card__btn'>Quick Add</button>
      ) : (
        <button className='card__btn'>Email when in stock</button>
      )}
    </div>
  );
};

export default Card;
