import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const ParallaxStyled = styled.div`
  .parallax {
    padding-top:50vh;
    height: 50vh;
    position: relative;
    overflow: hidden;
  }
  h2{
      padding-right:0.4rem;
  }
`;

const Parallax = () => (
  <ParallaxStyled>
    <Controller>
      <Scene
        // indicators={true}
        duration="200%"
        triggerHook="0"
        pin
      >
        <Timeline
          wrapper={<div className="parallax" />}
        >
          <Tween
          position="0"
            from={{
              top: '50%',
              scale: 9,
            }}
            to={{
              top: '75.5%',
              scale: 600,
            }}
          >
            <h2>portfolio</h2>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </ParallaxStyled>
);

export default Parallax;