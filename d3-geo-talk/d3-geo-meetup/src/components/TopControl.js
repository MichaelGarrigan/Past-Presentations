import React, { useState, useEffect } from 'react';

import '../styles/TopControl.css';


export default props => {
  const [playSelected, setPlaySelected] = useState('play');
  const [time, setTime] = useState(0);
  const [isTimeNegative, setIsTimeNegative] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);


  useEffect( () => {
    let timer = null;
    if (isTimerActive) {
      timer = setInterval( () => setTime(time => time - 1), 1000 );
    } else clearInterval(timer);

    return () => clearInterval(timer);
  }, [isTimerActive]);

  useEffect( () => {
    // sets the background of div.topcontrol-time-display to red if we are counting up
    if (time < 0 && !isTimeNegative) setIsTimeNegative(true);
  }, [time, isTimeNegative])

  const formatTime = time => {
    if (time < 0) {
      time *= -1;
    }
    let min = Math.floor(time / 60);
    let sec = time % 60; 
  
    let string = '';

    // handle minutes
    if (min === 0) string = '00:';
    else if (min < 10) string = `0${min}:`;
    else string = `${min}:`;
  
    // handle seconds
    if (sec === 0) string += '00';
    else if (sec < 10) string += `0${sec}`;
    else string += `${sec}`;
  
    return string;
  };
  
  return (
    <div className="topcontrol-wrapper">

      <svg 
        className="topcontrol-title-svg"
        height={props.height}
        width={props.height * 3} 
        version="1.1" 
        viewBox="0 0 158.75 52.916668" 
        xmlns="http://www.w3.org/2000/svg" 
      >
        <defs>
          <linearGradient id="linearGradient2195">
            <stop stopColor="#fc0" offset="0"/>
            <stop stopColor="#f48812" offset=".48303"/>
            <stop stopColor="#e95800" offset="1"/>
          </linearGradient>
        </defs>
 
        <g transform="translate(0 -244.08)">
          <g 
            transform="matrix(.96624 0 0 .96624 2.9876 10.481)" 
            fill="url(#linearGradient2195)" 
            strokeWidth=".27383" 
            aria-label="d3-geo"
          >
          <path 
            d="m1.4101 270.99q0-6.1246 2.7355-9.7558 2.7597-3.6312 7.5286-3.6312 3.8248 0 6.3182 2.8565v-13.363h7.0203v37.183h-6.3182l-0.33891-2.7839q-2.6144 3.2681-6.7298 3.2681-4.6237 0-7.4318-3.6312-2.7839-3.6554-2.7839-10.143zm6.9961 0.50836q0 3.6796 1.283 5.6404 1.283 1.9608 3.728 1.9608 3.2439 0 4.5753-2.7355v-10.337q-1.3072-2.7355-4.5269-2.7355-5.0594 0-5.0594 8.2065z" 
          />
          <path 
            d="m37.31 263.56h3.728q2.6629 0 3.9459-1.3314 1.283-1.3314 1.283-3.5344 0-2.1303-1.283-3.3165-1.2588-1.1862-3.4859-1.1862-2.0093 0-3.3649 1.1136-1.3556 1.0894-1.3556 2.8565h-6.9961q0-2.7597 1.4767-4.9384 1.5009-2.2029 4.1637-3.4375 2.6871-1.2346 5.9067-1.2346 5.592 0 8.7632 2.6871 3.1712 2.6629 3.1712 7.3592 0 2.4208-1.4767 4.4542-1.4767 2.0334-3.8733 3.1228 2.9776 1.0651 4.43 3.1954 1.4767 2.1303 1.4767 5.0352 0 4.6963-3.4375 7.5286-3.4133 2.8323-9.0537 2.8323-5.2773 0-8.6422-2.7839-3.3407-2.7839-3.3407-7.3592h6.9961q0 1.985 1.4767 3.2439 1.5009 1.2588 3.6796 1.2588 2.4934 0 3.8975-1.3072 1.4283-1.3314 1.4283-3.5101 0-5.2773-5.8099-5.2773h-3.7038z" 
          />
          <path 
            d="m72.557 272.01h-13.629v-5.6404h13.629z" 
          />
          <path 
            d="m77.205 270.99q0-6.0278 2.8565-9.7074 2.8807-3.6796 7.7465-3.6796 4.309 0 6.7056 2.9534l0.29049-2.4692h6.3425v25.321q0 3.4375-1.5735 5.9793-1.5493 2.5418-4.3816 3.8732-2.8323 1.3314-6.6329 1.3314-2.8807 0-5.6162-1.162-2.7355-1.1378-4.1395-2.9534l3.0986-4.2606q2.6144 2.9292 6.3425 2.9292 2.7839 0 4.3332-1.5009 1.5493-1.4767 1.5493-4.2122v-1.4041q-2.4208 2.7355-6.3667 2.7355-4.7205 0-7.6497-3.6796-2.9049-3.7038-2.9049-9.8042zm6.9961 0.50836q0 3.5586 1.4283 5.592 1.4283 2.0093 3.9217 2.0093 3.1954 0 4.5753-2.3966v-11.015q-1.4041-2.3966-4.5269-2.3966-2.5176 0-3.9701 2.0577-1.4283 2.0577-1.4283 6.1488z" 
          />
          <path 
            d="m118.55 284.77q-5.7615 0-9.3926-3.5343-3.607-3.5344-3.607-9.4169v-0.67782q0-3.9459 1.5251-7.0445 1.5251-3.1228 4.309-4.7932 2.8081-1.6946 6.3909-1.6946 5.3741 0 8.4485 3.3891 3.0986 3.3891 3.0986 9.6105v2.8565h-16.679q0.33891 2.566 2.0335 4.1153 1.7188 1.5493 4.3332 1.5493 4.0427 0 6.3182-2.9292l3.4375 3.849q-1.5735 2.2271-4.2606 3.4859-2.6871 1.2346-5.9551 1.2346zm-0.79886-21.497q-2.0819 0-3.3891 1.404-1.283 1.4041-1.6461 4.0185h9.7316v-0.55678q-0.0484-2.324-1.2588-3.5828-1.2104-1.283-3.4375-1.283z" 
          />
          <path 
            d="m132.23 270.95q0-3.8975 1.5009-6.9476 1.5009-3.0502 4.309-4.7205 2.8323-1.6703 6.5603-1.6703 5.3015 0 8.6422 3.2438 3.3649 3.2438 3.7522 8.8117l0.0484 1.7914q0 6.0278-3.3649 9.6831-3.3649 3.6312-9.0295 3.6312-5.6646 0-9.0537-3.6312-3.3649-3.6312-3.3649-9.8768zm6.9961 0.50837q0 3.728 1.4041 5.713 1.404 1.9608 4.0185 1.9608 2.5418 0 3.9701-1.9366 1.4283-1.9608 1.4283-6.2456 0-3.6554-1.4283-5.6646-1.4283-2.0092-4.0185-2.0092-2.566 0-3.9701 2.0092-1.4041 1.985-1.4041 6.173z" 
          />
          </g>
        </g>
      </svg>


      <div className="topcontrol-where-am-i">
        { `${props.currentSlide} / ${props.slideDeckLength}` }
      </div>

      <div className="topcontrol-timer-wrapper">

        <div className={isTimeNegative ? "topcontrol-time-display-negative" : "topcontrol-time-display"}>
          <p>{formatTime(time)}</p>
        </div>  

        <div className="topcontrol-play-reset-wrapper"> 
        
          <div 
            className="topcontrol-button topcontrol-reset-button" 
            onClick={() => {
              setTime(0);
              setPlaySelected('play');
              setIsTimerActive(false);
              setIsTimeNegative(false);
            }}
          >
            <svg
              className="svg-button svg-reset-button"
              height={props.height * 0.3}
              viewBox="0 0 512 512"
              width={props.height * 0.3}
            >
              <path
                d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"
              />
            </svg>
          </div>

        {
          playSelected === 'play'
            ? (
              <div 
                className="topcontrol-button topcontrol-play-button" 
                onClick={
                  () => {
                    setPlaySelected('');
                    setIsTimerActive(true);
                  }}
              >
                <svg
                  className="svg-button svg-play-button"
                  height={props.height * 0.3}
                  viewBox="0 0 512 512"
                  width={props.height * 0.3}
                >
                  <path
                    d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                  />
                </svg>
              </div>
              ) : (
              <div 
                className="topcontrol-button topcontrol-pause-button" 
                onClick={
                  () => {
                    setPlaySelected('play');
                    setIsTimerActive(false);
                  }}
              >
                <svg
                  className="svg-button svg-pause-button"
                  height={props.height * 0.3}
                  viewBox="0 0 512 512"
                  width={props.height * 0.3}
                >
                  <path
                    d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
                  />
                </svg>
              </div>
              )
          }

        </div>

        <div className="topcontrol-add-time-wrapper">
          <div 
            className="topcontrol-add-time-button topcontrol-add-time-5"
            onClick={() => setTime(time + 300)}
          >
            <svg
              className="svg-button svg-pause-button"
              height={props.height * 0.2}
              viewBox="0 0 512 512"
              width={props.height * 0.2}
            >
              <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </svg>
            <span>5</span>
          </div>
          <div 
            className="topcontrol-add-time-button topcontrol-add-time-1"
            onClick={() => setTime(time + 60)}
          >
            <svg
              className="svg-button svg-pause-button"
              height={props.height * 0.2}
              viewBox="0 0 512 512"
              width={props.height * 0.2}
            >
              <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              />
            </svg>
            <span>1</span>
          </div>
        </div>        

      </div> 
    </div>
  );
};