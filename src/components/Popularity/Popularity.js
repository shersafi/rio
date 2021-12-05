import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Paragraph } from './PopularityStyles';

const data = [
  { number: 'React', text: 'Ranked #2 as most used UI framework' },
  { number: 'NodeJS', text: 'Ranked #6 as the most popular technology' },
  { number: 'React', text: '9,677,665+ live websites use React' },
  { number: 'NodeJS', text: '30,000,000+ live websites use NodeJS' },
];

const Popularity = () => (
  <Section>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px'}}>How Popular are ReactJS & NodeJS?</h1>
    <br />    
    <br />    
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <br /> 
    <br />       
    <Paragraph>
      <a style={{fontWeight: 'bold'}}>ReactJS </a> is one of the leading open-source UI front-end solutions in the website development industry. It is ranked #2 of the most used front-end frameworks according to StackOverflow, with 9,677,665+ live websites using React according to BuiltWith. ReactJS has many integrations with additional frameworks, like NextJS, one of the leading static and server side rendering solutions.
      <br />
      <br />  
      <a style={{fontWeight: 'bold'}}>NodeJS </a> is the most popular back-end solution in the website development industry, ranked #6 in the most popular technology according to StackOverflow. According to Similar Tech, over 30,000,000 live sites use NodeJS. NodeJS also has many integrations with additional frameworks, one being ExpressJS, which is the most popular server framework for NodeJS.
    </Paragraph>        
    <SectionDivider colorAlt />
  </Section>
  
);

export default Popularity;
