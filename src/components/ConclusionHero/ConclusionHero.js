import React from 'react';

import { Paragraph } from './CHStyles';
import {
  SectionDivider,
} from '../../styles/GlobalComponents';


const CH = () => (
  <>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px', paddingTop: '40px'}}>Conclusion🥳</h1>

    <Paragraph>
        This term project was a great experience to learn how to build both an industry-grade front-end and back-end. Using tools like React, SocketIO, and NodeJS enabled us to look at website development differently than we did before. Here is a conclusion for all the tools used in our stack:
    </Paragraph>
    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', fontSize: '26px', marginTop: '-5%'}}>ReactJS & NodeJS</h1>
    <Paragraph>
        React is the most used framework in our stack. It handles all of our front-end. React has made of our experience much better after we got past the learning curve as it allowed us to re-use components and save a lot of time when it came to writing up the front-end. It also allowed us to keep our code neat and organized with folders and subfolders containing JavaScript files of our code. Node.js is made for back-end or full-stack developers. It allows for easily building fast and scalable network applications using Javascript. Node.js is completely open-source and is available on OS X, Microsoft Windows, and Linux platforms.
        <br />
        <br />
        Installation and configuration is also made very simple in React and NodeJS. It integrates directly into VS Code and only requires the installation of NodeJS first and then external libraries like React can be easily installed. Both out-of-the-box configurations were also enough for us to start building the front-end and back-end right away, the only thing we needed to do was get past the learning curve. With that being said, it was simple to create multiple pages, all you have to do is create a <a style={{backgroundColor: 'gray', color: '#fff'}}>pages</a> folder and enclose the pages as JavaScript files. 
        <br />
        <br />
        The learning curve for ReactJS and NodeJS was much steeper than the previous frameworks and languages learned in the labs. How React deals with components and tags is very different from traditional HTML/CSS/JavaScript/JQuery/PHP. Instead, the JavaScript files in React are treated as a chain, much similar to how C deals with functions, small components building up to become one. 
        <br />
        <br />
        Especially NodeJS, where the learning curve is even steeper. NodeJS has a lot of features which comes from external packages. A node project would require many packages each with their own features that the developer has to learn about, not all packages are well documented so it’s difficult to find help for them. Compared to other server languages that we learned like cgi/python, cgi/ruby, asp.net. The newer and more powerful Node.js allowed us to quickly implement a server to handle our chat and collaborative whiteboard application. Modern libraries allow us to write less code to achieve the same functionality. Hence, Node.js was the perfect framework for our backend, we do not regret our choice.
        <br />
        <br />
        Thinking back, it was a great choice we used React and NodeJS despite the steep learning curve and we do not regret it. This is because they did make our lives so much easier when it came to making the front-end with the re-usable components and how easy the server is to setup in NodeJS. However, if we could go back, we would probably avoid
        <br />
        <br />
        Rating of React from our group: 9/10 👍
        <br />
        Rating of NodeJS from our group: 9/10 👍

    </Paragraph>
    <SectionDivider colorAlt />
    <br /> 
  </>

         
 
);

export default CH;
