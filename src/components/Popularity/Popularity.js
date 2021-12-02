import React from 'react';

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Paragraph } from './PopularityStyles';

const data = [
  { number: 'Ranked #2', text: 'As most used UI framework on StackOverflow' },
  { number: 'Used by', text: 'Netflix, Facebook, Instagram, Reddit, and more!' },
  { number: '9,677,665', text: 'live websites use React' },
  { number: 'Integration', text: 'Integrates with many other frameworks like NextJS' },
];

const Popularity = () => (
  <Section>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px'}}>How Popular is React?</h1>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

    <Paragraph>
      React is one of the leading open-source UI front-end solutions in the website development industry. React is ranked #2 of the most used front-end frameworks according to StackOverflow. React has many integrations with additional frameworks, like NextJS, one of the leading static and server side compiling solutions.
    </Paragraph>        
    <SectionDivider colorAlt />
  </Section>
  
);

export default Popularity;
