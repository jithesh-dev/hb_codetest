import React from 'react';
import CountDownTimer from '../countdown-timer';
import './modal.css';

const Modal = ({ modalClose }) => {
  return (
    <div className='modal'>
      <div className='modal__box'>
        <button className='modal__close' onClick={() => modalClose()}>
          x
        </button>
        <h1 className='modal__title'>Wait, dont go!</h1>
        <h3 className='modal__text'>
          During November use code <strong>DISCOUNT</strong> for 15% off all
          orders over £20
        </h3>
        <CountDownTimer endDate={'November 30 ,2020 23:59:59'} />
      </div>
    </div>
  );
};

export default Modal;
