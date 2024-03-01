import React from "react";

import {
  Section,
  SectionText,
  SectionSpan,
  SectionTitle,
  SectionSubTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionSpan>Hi, my name is</SectionSpan>
        <SectionTitle main center>
          Ngo Quoc Dat
        </SectionTitle>
        <SectionSubTitle>I'm a dedicated Software Engineer</SectionSubTitle>
        <SectionText>
          As a Software Engineer, I possess a comprehensive skillset
          encompassing Front-end and Back-end development and Cloud Computing.<br/>
          Driven by a passion for innovation, I am skillful at tackling
          intricate technical challenges.
          <br />I value teamwork, innovation, and quality in my work. I seek to
          apply my cloud computing and development skills to create impactful
          and user-friendly applications.
        </SectionText>
        <Button onClick={props.handleClick}>Get In Touch</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
