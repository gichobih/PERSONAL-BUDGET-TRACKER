import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../../img/landpage.png'; // Replace with your image path
import incomeImg from '../../img/Incomes.png'; // Replace with your image path
import expenseImg from '../../img/Expenses.png'; // Replace with your image path
import transactionImg from '../../img/Transactions.png'; // Replace with your image path

const LandingPage = ({ setActive }) => {
  const handleGetStarted = () => {
    setActive(1); // Navigate to Dashboard
  };

  return (
    <LandingPageStyled>
      <div className="overlay"></div>

      <div className="landing-content">
        <h1>
          Welcome to <span>Personal Budget Tracker</span>
        </h1>
        <p className="main-quote">"Take Control, Track Progress, Build Your Future"</p>

        {/* Rotating Quotes Section */}
        <div className="quote-carousel">
          <p className="quote">"Your Money, Your Rules"</p>
          <p className="quote">"Track Every Penny, Achieve Every Goal"</p>
          <p className="quote">"Financial Clarity at Your Fingertips"</p>
          <p className="quote">"Master Your Money with Ease"</p>
        </div>

        <button onClick={handleGetStarted} className="get-started">
          Get Started
        </button>
      </div>

      <FeaturesSection>
        <h2>Key Features</h2>
        <Feature>
          <FeatureImage src={incomeImg} alt="Incomes" />
          <FeatureName>Incomes</FeatureName>
          <FeatureDescription>
            The Income Tracking feature enables users to manage and monitor their income efficiently.
            Users can add various income sources, categorize them, and visualize income trends with
            interactive charts. It also allows setting financial goals and generating detailed
            reports to track progress and make informed financial decisions.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureImage src={expenseImg} alt="Expenses" />
          <FeatureName>Expenses</FeatureName>
          <FeatureDescription>
            The Expense Tracking feature helps users manage and oversee their spending. It allows
            users to categorize expenses, set budgets, and track their spending habits with visual
            charts and summaries. Users can also view detailed reports to analyze spending patterns
            and make adjustments to stay within budget.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureImage src={transactionImg} alt="Transactions" />
          <FeatureName>All Transactions</FeatureName>
          <FeatureDescription>
            The Transaction Management page provides a comprehensive overview of all financial
            transactions. Users can add, edit, or delete transactions, categorize them, and view
            them in a detailed list. This page helps users track their financial activities,
            reconcile accounts, and gain insights into their spending and income patterns.
          </FeatureDescription>
        </Feature>
      </FeaturesSection>

      <AboutSection>
        <AboutDescription>
          <p>
            Inspired by my journey to better manage my personal finances, this project aims to
            provide users with an easy and effective tool to track their income and expenses. This
            is a Portfolio Project for Holberton School.
          </p>
          <a href="https://github.com/gichobih/PERSONAL-BUDGET-TRACKER" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </AboutDescription>
      </AboutSection>
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
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
    pointer-events: none; /* Ensure clicks are not blocked by the overlay */
  }

  .landing-content {
    position: relative;
    z-index: 2; /* Ensure content is above the overlay */
    color: #fff;
    animation: ${fadeIn} 1s ease-out;
    padding: 0 20px;

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

// Styled Components for Features Section
const FeaturesSection = styled.section`
  background-color: #f4f4f4;
  padding: 50px 20px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  z-index: 2; /* Ensure content is above overlay */
  position: relative;
`;

const Feature = styled.div`
  margin: 20px;
  display: inline-block;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

const FeatureName = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.5;
  color: #333;
`;

// Styled Components for About Section
const AboutSection = styled.section`
  background-color: #333;
  color: #fff;
  padding: 50px 20px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  z-index: 2; /* Ensure section is above overlay */
  position: relative;
`;

const AboutDescription = styled.div`
  margin-bottom: 20px;

  a {
    color: #00b4db;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #0083b0;
    }
  }
`;

export default LandingPage;
