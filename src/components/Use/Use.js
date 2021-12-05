import React from 'react';
import { HiHand, HiDocumentSearch } from 'react-icons/hi';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Paragraph } from "./UseStyles";


const Timeline = () => {
  return (
    <Section id='about'>
      
      <h1 style={{color: '#2C1338', textAlign: 'center', marginTop: '80px'}}>Who & What do Developers Mostly use These for?</h1>
      <h2 style={{color: '#2C1338', textAlign: 'center', marginTop: '20px', marginBottom: '10px'}}>Who? <HiHand size='3rem' color="#2C1338"/></h2>
      <Paragraph>
        <a style={{fontWeight: 'bold'}}>ReactJS</a> is made for front-end and full-stack developers who want to work primarily in JavaScript.
        More specifically, most JavaScript developers who want to use JavaScript libraries, and like to deal
        with website sections in components will use React. <br /><br />

        <a style={{fontWeight: 'bold'}}>NodeJS</a> is made for back-end and full-stack developers who want to work in JavaScript outside of the web browser. More specifically, for developers who want server-side JavaScript programming that is scalable and able to be designed from scratch. 



      </Paragraph>
      <h2 style={{color: '#2C1338', textAlign: 'center', marginBottom: '10px'}}>What for? <HiDocumentSearch size='3rem' color="#2C1338"/></h2>
      <Paragraph>
        <a style={{fontWeight: 'bold'}}>ReactJS</a> is made to create larger sites where it will be easier to
        re-use components, and use external JavaScript libraries for convenience. Sites such as FaceBook, Instagram, Airbnb use React. <br /><br />

        <a style={{fontWeight: 'bold'}}>NodeJS</a> is made for both small and large apps that can start from scratch. Larger apps are a big plus for NodeJS, for instance, developers from large companies such as LinkedIn, Netflix, Uber, PayPal, and more develop in NodeJS.
      </Paragraph>
      <br />
      <br />
      
    </Section>
  );
};

export default Timeline;
