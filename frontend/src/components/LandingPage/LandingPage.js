import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../../img/landpage.png'; // Replace with your image path

const LandingPage = ({ setActive }) => {
  const handleGetStarted = () => {
    setActive(1); // Navigate to Dashboard
  };

  return (
    <LandingPageStyled>
      <div className="overlay"></div>

      <div className="landing-content">
        <h1>Welcome to <span>Personal Budget Tracker</span></h1>
        <p className="main-quote">"Take Control, Track Progress, Build Your Future"</p>

        {/* Rotating Quotes Section */}
        <div className="quote-carousel">
          <p className="quote">"Your Money, Your Rules"</p>
          <p className="quote">"Track Every Penny, Achieve Every Goal"</p>
          <p className="quote">"Financial Clarity at Your Fingertips"</p>
          <p className="quote">"Master Your Money with Ease"</p>
        </div>

        <button onClick={handleGetStarted} className="get-started">Get Started</button>
      </div>
    </LandingPageStyled>
  );
};

// Keyframes for Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Component for Landing Page
const LandingPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  /* Background Image Styling */
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  /* Dark Overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  .landing-content {
    position: relative;
    z-index: 1;
    color: #fff;
    animation: ${fadeIn} 1s ease-out;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 20px;
      line-height: 1.2;
      
      span {
        background: linear-gradient(90deg, #00b4db, #0083b0);
        -webkit-background-clip: text;
        color: transparent;
      }
    }

    .main-quote {
      font-size: 1.8rem;
      margin-bottom: 30px;
      font-style: italic;
    }

    /* Rotating Quotes Section */
    .quote-carousel {
      animation: ${fadeIn} 1.5s ease-out;
      margin-bottom: 40px;

      .quote {
        font-size: 1.5rem;
        font-weight: 400;
        opacity: 0.9;
        margin-bottom: 15px;
      }
    }

    /* Animated Get Started Button */
    .get-started {
      padding: 15px 40px;
      font-size: 1.5rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      animation: ${pulse} 2s infinite;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #218838;
        transform: scale(1.1);
      }
    }
  }
`;

export default LandingPage;
