import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {
  const { width, height } = useWindowSize();
  console.log(width, height);

const moveOrb = keyframes`
   0% {
         transform: translate(0,0);
    }
    50% {
      transform: translate(${width/1.2}px, ${height/2}px);
    }
    100% {
      transform: translate(0,0)
    }
`;

// Define styled component outside the component
const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -35vh; 
    margin-top: -35vh;  
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${moveOrb} 10s alternate linear infinite;
`;


    return (
        <OrbStyled>Orb</OrbStyled>
    );
}

export default Orb;
