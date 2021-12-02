import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { LeftSection, RightSection } from './HeroStyles';

const code = `// React is just like HTML, just with a spice of JavaScript!
class Example extends React.Component {
  render() {
    return (
      <h1>Welcome to React!</h1>
      <div className="list">
        <h2>Making a website is as easy as</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3!</li>
        </ul>
      </div>
    )
  }
}`

const Hero = () => (
  <>
  
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          ReactJS: <br />
          Front-end Framework
        </SectionTitle>
        <SectionText>
          The open-source front-end JavaScript library solution. Used around the world for building UIs by individuals, companies, and is used to power this website. This site also is powered by NextJS, a React add-on.
        </SectionText>
      </LeftSection>
    </Section>

    <RightSection>
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <br />
        <br />
        <div className="code-body">
          <SyntaxHighlighter showLineNumbers={true} customStyle={{background: 'none'}}>
            {code}
          </SyntaxHighlighter>
        </div>
    </RightSection>
    
  </>
);

export default Hero;

