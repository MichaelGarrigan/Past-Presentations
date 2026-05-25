import React from 'react';

import slideArr from './slideArr.js';
import xSlide from './slide/xSlide.js'

import '../styles/BottomControl.css';



export default ({height, width, currentSlide, setCurrentSlide}) => {
  const height75 = Math.round(height * 0.75);
  const height90 = Math.round(height * 0.9);


  const renderSlide = (Comp, height) => (
    <Comp height={height} width={height * 1.33} />
  );

  return (
    <div className="bottomcontrol-wrapper">

      {
        currentSlide === 0
          ? (
            <div 
              className="bottomcontrol-button-disabled" 
            >
              <svg
                className="svg-angles-button"
                height={height90}
                viewBox="0 0 448 512"
                width={height90 * 1.33}
              >
                <path
                  d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
                />
              </svg>
            </div>
          ) : (
            <div 
              className="bottomcontrol-button" 
              onClick={() => setCurrentSlide(currentSlide => currentSlide - 1)}
            >
              <svg
                className="svg-angles-button"
                height={height90}
                viewBox="0 0 448 512"
                width={height90 * 1.33}
              >
                <path
                  d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
                />
              </svg>
            </div>
          )
      }

        <div className="bottomcontrol-thumbnail-wrapper">

          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide - 3 >= 0) setCurrentSlide(currentSlide - 3)
            }}
          >
            {
              currentSlide - 3 >= 0
                ? renderSlide(slideArr[currentSlide - 3], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide - 2 >= 0) setCurrentSlide(currentSlide - 2)
            }}
          >
            {
              currentSlide - 2 >= 0
                ? renderSlide(slideArr[currentSlide - 2], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide - 1 >= 0) setCurrentSlide(currentSlide - 1)
            }}
          >
            {
              currentSlide - 1 >= 0
                ? renderSlide(slideArr[currentSlide - 1], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          <div 
            className="bottomcontrol-thumbnail-button-center"
            style={{height: height90 + 3, width: height90 * 1.33 + 3}}
          >
            {renderSlide(slideArr[currentSlide], height90)}
          </div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide + 1 <= slideArr.length - 1) setCurrentSlide(currentSlide + 1)
            }}
          >
            {
              currentSlide + 1 <= slideArr.length - 1
                ? renderSlide(slideArr[currentSlide + 1], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide + 2 <= slideArr.length - 1) setCurrentSlide(currentSlide + 2)
            }}
          >
            {
              currentSlide + 2 <= slideArr.length - 1
                ? renderSlide(slideArr[currentSlide + 2], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          <div 
            className="bottomcontrol-thumbnail-button"
            style={{height: height75 + 2, width: height75 * 1.33 + 2}}
            onClick={() => {
              if (currentSlide + 3 <= slideArr.length - 1) setCurrentSlide(currentSlide + 3)
            }}
          >
            {
              currentSlide + 3 <= slideArr.length - 1
                ? renderSlide(slideArr[currentSlide + 3], height75)
                : renderSlide(xSlide, height75)
            }
          </div>
          
        </div>

        {
          currentSlide === slideArr.length - 1 
            ? ( // show disabled button on last slide
              <div 
                className="bottomcontrol-button-disabled" 
              >
                <svg
                  className="svg-angles-button"
                  height={height90}
                  viewBox="0 0 448 512"
                  width={height90 * 1.33}
                >
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                  />
                </svg>
              </div>
            ) : (
              <div 
                className="bottomcontrol-button" 
                onClick={() => setCurrentSlide(currentSlide => currentSlide + 1)}
              >
                <svg
                  className="svg-angles-button"
                  height={height90}
                  viewBox="0 0 448 512"
                  width={height90 * 1.33}
                >
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                  />
                </svg>
              </div>
            )
        }
    </div>
  );
};