import React, { useState, useRef, useEffect } from 'react';
import './countdown.css';

const CountDownTimer = ({ endDate }) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date(endDate).getTime();
    //   const countDownDate = new Date('December 30 ,2020 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let current = interval.current;
    startTimer();
    return () => {
      clearInterval(current);
    };
  });
  return (
    <h3 className='timer'>
      {timerDays}d:{timerHours}h:{timerMinutes}m:{timerSeconds}s
    </h3>
  );
};

export default CountDownTimer;
