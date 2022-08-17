import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/> 
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        PRESS THE BUTTON BELOW TO LEARN MORE ABOUT ME!!!
      </SectionText>
      <a href="#about"><Button onClick={props.handleClick}>Learn More</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;