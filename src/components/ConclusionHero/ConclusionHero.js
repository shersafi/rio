import React from 'react';

import { Paragraph } from './CHStyles';
import {
  SectionDivider,
} from '../../styles/GlobalComponents';


const CH = () => (
  <>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px', paddingTop: '40px'}}>Conclusion🥳</h1>

    <Paragraph>
        This term project was a great experience to learn how to build both an industry-grade front-end and back-end. Using tools like React, SocketIO, and NextJS enabled us to look at website development differently than we did before. Here is a conclusion for all the tools used in our stack:
    </Paragraph>
    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', fontSize: '26px', marginTop: '-5%'}}>React⚛, NextJS⏭️, SocketIO🔌</h1>
    <Paragraph>
        React is the most used framework in our stack. It handles all of our front-end alongside its add-on NextJS. React has made of our experience much better after we got past the learning curve as it allowed us to re-use components and save a lot of time when it came to writing up the front-end. It also allowed us to keep our code neat and organized with folders and subfolders containing JavaScript files of our code. 
        <br />
        <br />
        Installation and configuration is also made very simple in React. It integrates directly into VS Code and only requires the installation of NodeJS and then React can be installed. Its out-of-the-box configurations were also enough for us to start building the front-end, the only thing we needed to do was get past the learning curve. With that being said, it was simple to create multiple pages, all you have to do is create a <a style={{backgroundColor: 'gray', color: '#fff'}}>pages</a> folder and enclose the pages as JavaScript files.
        <br />
        <br />
        The learning curve was much steeper than the previous frameworks and languages learned in the labs. How React deals with components and tags is very different from traditional HTML/CSS/JavaScript/JQuery/PHP. Instead, the JavaScript files in React are treated as a chain, much similar to how C deals with functions, small components building up to become one. 
        <br />
        <br />
        Thinking back, it was a great choice we used React despite the steep learning curve. This is because it did make our lives so much easier when it came to making the front-end with the re-usable components and how every component is treated indepndent. However, if we could go back, we would probably avoid using NextJS as it was not necessarily needed for what we are doing. NextJS is meant for more production level code for bigger corporations, but our stack was rather simple, making it unneeded.
        <br />
        <br />
        Rating of React from our group: 9/10 👍
        <br />
        Rating of NextJS from our group: 7/10 👍
        <br />
        Rating of SocketIO from our group: 8/10 👍
    </Paragraph>
    <SectionDivider colorAlt />
    <br /> 
  </>

         
 
);

export default CH;
