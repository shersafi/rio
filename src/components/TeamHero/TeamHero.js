import React from 'react';
import def from "../../../public/images/default.png";
import { Paragraph } from './THStyles';
import { HiBadgeCheck } from 'react-icons/hi';

import { Boxes, Box, BoxNum, BoxText } from './THStyles';
import {
  SectionDivider,
} from '../../styles/GlobalComponents';


const TeamHero = () => (
  <>
    <br />
    <h1 style={{color: '#2C1338', textAlign: 'center', marginTop: '40px', paddingTop: '60px'}}>You're in good hands 😃</h1>
    <br />
    <br />
    <div className="container" style={{display: 'flex', alignItems: 'center'}}>
      <Boxes>
        <Box>
          <img src={def} style={{borderRadius: '20%', height: '35%', float: 'left'}}></img>
          <h3 style={{color: '#2C1338', fontSize: '26px', marginTop: '5%'}}>&nbsp;&nbsp;&nbsp;Sher Safi</h3>
          <h2 style={{color: '#2C1338', fontSize: '14px', marginTop: '1%', color: 'gray', fontWeight: 'lighter'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-end Developer</h2><br /><br />
          <h1 style={{color: '#2C1338', fontSize: '17px', fontWeight: 'lighter', lineHeight: '25px'}}>Sher took charge in developing the front-end UI of Rio. He is a huge fan of React and uses it for many of his front-end solutions.</h1>
        </Box> 
        <Box>
          <img src={def} style={{borderRadius: '20%', height: '35%', float: 'left'}}></img>
          <h3 style={{color: '#2C1338', fontSize: '26px', marginTop: '5%'}}>&nbsp;&nbsp;&nbsp;Yu Chen Zhao</h3>
          <h2 style={{color: '#2C1338', fontSize: '14px', marginTop: '1%', color: 'gray', fontWeight: 'lighter'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back-end Developer</h2><br /><br />
          <h1 style={{color: '#2C1338', fontSize: '17px', fontWeight: 'lighter', lineHeight: '25px'}}>Yu Chen took charge of developing the back-end of Rio. This includes the multi-player chat/drawing app component. He is a huge fan of SocketIO.</h1>    
        </Box>
        <Box>
          <img src={def} style={{borderRadius: '20%', height: '35%', float: 'left'}}></img>
          <h3 style={{color: '#2C1338', fontSize: '26px', marginTop: '5%'}}>&nbsp;&nbsp;&nbsp;Mijal Shrestha</h3>
          <h2 style={{color: '#2C1338', fontSize: '14px', marginTop: '1%', color: 'gray', fontWeight: 'lighter'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full-stack Support</h2><br /><br />
          <h1 style={{color: '#2C1338', fontSize: '17px', fontWeight: 'lighter', lineHeight: '25px'}}>Mijal took charge of supporting both the front-end and back-end of Rio. He enjoys both React and NodeJS.</h1>    
        </Box>
      </Boxes>
    </div>
    <h1 style={{color: '#2C1338', textAlign: 'center', marginTop: '40px', paddingTop: '60px'}}>References 📜</h1>
    <Paragraph>
      <a style={{fontWeight: 'bold'}}>[1] ReactJS's Popularity:</a> <a href="https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190">Github Gist Statistics from StackOverflow</a> <br />
      <a style={{fontWeight: 'bold'}}>[2] NodeJS's Popularity:</a> <a href="https://insights.stackoverflow.com/survey/2021">StackOverflow Insights Survey Reporting Framework Popularity</a> <br />
      <a style={{fontWeight: 'bold'}}>[3] ReactJS Live Websites Count:</a> <a href="https://trends.builtwith.com/javascript/React">BuiltWith Report on Number of Live Sites Using ReactJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[4] NodeJS Live Websites Count:</a> <a href="https://hostingtribunal.com/blog/node-js-stats/">HostingTribunal Report on Number of Live Sites Using NodeJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[5] ReactJS Strengths & Weaknesses:</a> <a href="https://www.javatpoint.com/pros-and-cons-of-react">JavaTPoint Report on Pros & Cons of ReactJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[6] NodeJS Strengths & Weaknesses:</a> <a href="https://www.simform.com/blog/nodejs-advantages-disadvantages/">SIMFORM Report on Pros & Cons of NodeJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[7] Companies that use ReactJS:</a> <a href="https://medium.com/@coderacademy/32-sites-built-with-reactjs-172e3a4bed81">Medium Report on Companies That use ReactJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[8] Companies that use NodeJS:</a> <a href="https://trio.dev/blog/companies-use-node-js">Trio Report on Companies That use NodeJS</a> <br />
      <a style={{fontWeight: 'bold'}}>[9] Referenced SocketIO Documentation:</a> <a href="https://socket.io/demos/whiteboard/">References how to make a whiteboard used in our app</a> <br />
      <a style={{fontWeight: 'bold'}}>[10] Referenced SocketIO Tutorial:</a> <a href="https://www.youtube.com/watch?v=ZwFA3YMfkoc">References how to make a live chat app used in our app</a> <br />
    </Paragraph>
    
  </>

);

export default TeamHero;
