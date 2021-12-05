import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useWindowSize } from "@reach/window-size";
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Container, Child, RightSection, Button1, Button2 } from './HeroStyles';

const code1 = `// React is just like HTML, just with a spice of JavaScript!
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
}`;

const code2 = `const express = require('express'); // Import express module
const socketio = require('socket.io'); // Import socket module
const http = require('http'); // Import core NodeJS module

const HTTP_PORT = process.env.PORT || 5000; // Setup port

const server = http.createServer(app); // Create app

//Listen for incoming requests
server.listen(HTTP_PORT, () => {
  console.log('Server running on port {HTTP_PORT}');
});`;

const Title = () => {
  const { width } = useWindowSize();

  if (width > 1280) return <SectionTitle main center>ReactJS & NodeJS: <br /> Full-stack Solution</SectionTitle>

  return <SectionTitle main center>ReactJS & NodeJS: Full-stack Solution</SectionTitle>
}


const OtherSection = () => {
  const { width } = useWindowSize();
  const [codeBlock, setCodeBlock] = useState(code1);

  if (width > 800) return (
    <Child>
        <RightSection>
          <div className="menu" style={{borderBottom: '1px solid #F6D4DC'}}>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
            <Button1 onClick={() => setCodeBlock(code1)} autoFocus>React.js</Button1>
            <Button2 onClick={() => setCodeBlock(code2)}>NodeServer.js</Button2>
          </div>
          <br />
          <br />
          <div className="code-body" style={{minWidth: '650px', marginTop: '-20px'}}>
            <SyntaxHighlighter showLineNumbers={true} style={a11yDark} customStyle={{background: 'none'}}>
              {codeBlock}
            </SyntaxHighlighter>
          </div>
        </RightSection>
      </Child>
  )

  return null;
}

const Hero = () => (
  <>
    <Container>
      <Child>
        <Title />
        <SectionText>
            React is our open-source front-end JavaScript library solution. Often used around the world for building UIs by both individuals and companies. NodeJS is our open-source back-end solution, used to execute JavaScript code outside a web browser.
        </SectionText>
      </Child>

      <OtherSection />
    </Container>  
    
  </>
);

export default Hero;
