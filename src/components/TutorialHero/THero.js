import React from 'react';
import Link from 'next/link';
import { Paragraph, Box1, Content } from './THeroStyles';
import chat from '../../../public/images/chatapp.png'
import { HiOutlineLightBulb, HiOutlineDatabase, HiOutlineLink, HiOutlineChatAlt2 } from 'react-icons/hi';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  SectionDivider,
} from '../../styles/GlobalComponents';

const code1 = `const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');`;

const code2 = `const app = express();
const server = http.createServer(app);`;

const code3 = `app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Rio chat server is up and running!');
});`;

const code4 = `server.listen(HTTP_PORT, () => {
  console.log('Server running on port {HTTP_PORT}');
});`;

const file = `Chat (folder)
        InfoBar (folder)
		InfoBar.js
		InfoBar.css
	Messages (folder)
		Message (folder)
			Message.js
			Message.css
		Messages.js
		Messages.css
	Input (folder)
		Input.js
		Input.css
	Chat.js 
	Chat.css`;

const chatCSS = `.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border: 3px solid #E27188;
  height: 100vh;
}`;

const infoBar = `.infoBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #E27188;
  height: 60px;
  width: 100%;
}
 
.leftInnerContainer {
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
}
 
.rightInnerContainer {
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
}
 
.onlineIcon {
  margin-right: 5%;
}`;

const messageCSS = `.messageBox {
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
}
 
.messageText {
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
}
 
.messageText img {
  vertical-align: middle;
}
 
.messageContainer {
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
}
 
.name {
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
}`;

const messages = `.messages {
  padding: 5% 0;
  overflow: auto;
  flex: auto;
  max-height: 100%;
}`;

const inputCSS = `.form {
  display: flex;
  border: 2px solid #D3D3D3;
}
 
.input {
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
}
 
input:focus, textarea:focus, select:focus{
  outline: none;
}
 
.sendButton {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #E27188;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
}`;

const chatcomp = `const Chat = ({name, room}) => {
  return (
    <div className="chat-container">
    </div>
  );
};`;

const dependenciez = `import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
 
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Messages/Messages';
 
import './Chat.css';`;

const Tutorial = () => (
  <>
    <Box1>
      <Content>
        <a style={{textDecoration: 'underline'}}>Pre-requisites</a>
        <br />
        <br />
        <h3 style={{color: '#2C1338', textAlign: 'center', fontSize: '20px', marginBottom: '25px', lineHeight: '40px'}}><HiOutlineLightBulb size='5rem' color="#2C1338"/> Ensure to follow <Link href='/installation'>the installation procedure first.</Link></h3>

        <h3 style={{color: '#2C1338', textAlign: 'center', fontSize: '20px', lineHeight: '40px'}}><HiOutlineDatabase size='4rem' color="#2C1338" /> Install Express to setup the server, through npm: <SyntaxHighlighter customStyle={{width: '40%', display: 'inline', height: '60%' }}>npm install express --save</SyntaxHighlighter></h3>

        <h3 style={{color: '#2C1338', textAlign: 'center', fontSize: '20px', marginTop: '30px', lineHeight: '40px'}}><HiOutlineLink size='4rem' color="#2C1338" /> Install Cors to specify external web browser origins, through npm: <SyntaxHighlighter customStyle={{width: '40%', display: 'inline', height: '60%' }}>npm install cors --save</SyntaxHighlighter></h3>

        <h3 style={{color: '#2C1338', textAlign: 'center', fontSize: '20px', marginTop: '30px', lineHeight: '40px'}}><HiOutlineChatAlt2 size='4rem' color="#2C1338" /> Install SocketIO to setup the live chat app, through npm: <SyntaxHighlighter customStyle={{width: '40%', display: 'inline', height: '60%' }}>npm install socketio --save</SyntaxHighlighter></h3>
        <br />
        <br />
      </Content>
    </Box1>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '-50px'}}>Create Your First web Server!</h1>
    <Paragraph>
      1. Open the “index.js” you have created in the first part of this tutorial. <br />
      2. We will start by importing the necessary libraries: <br />
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {code1}
      </SyntaxHighlighter>
      3. Next we will choose the port that our server will use. When we host this project using cloud application platforms like Heroku. A port will automatically chosen for us, if no port is chosen, then we set the port to 5000. <br />
      <SyntaxHighlighter showLineNumbers startingLineNumber={5} customStyle={{lineHeight: '24px'}}>
        const HTTP_PORT = process.env.PORT || 5000;
      </SyntaxHighlighter>
      4. We will create our express app which will allow us to listen to requests on our server. We will also create the HTTP server with our app. <br />
      <SyntaxHighlighter showLineNumbers startingLineNumber={6} customStyle={{lineHeight: '24px'}}>
        {code2}
      </SyntaxHighlighter>
      5. When requests are made to our server from some origin. Unless we specifically state that the origin is allowed, the request would be blocked. Normally, you should only allow trusted origins, but since for our simple app, we will allow all origins: <br />
      <SyntaxHighlighter showLineNumbers startingLineNumber={8} customStyle={{lineHeight: '24px'}}>
        app.use(cors());
      </SyntaxHighlighter>
      6. When a request is made to our server, we will need to send a response back. The code below will return plain text indicating that our server is running when a request is made to the root url (/) <br />
      <SyntaxHighlighter showLineNumbers startingLineNumber={9} customStyle={{lineHeight: '24px'}}>
        {code3}
      </SyntaxHighlighter>
      7. We need to tell the app to start listening to requests on the specified port. <br />
      <SyntaxHighlighter showLineNumbers startingLineNumber={14} customStyle={{lineHeight: '24px'}}>
        {code4}
      </SyntaxHighlighter>
      8. Yay! We are ready to start our server. Simply navigate to the server’s folder in the terminal and type <SyntaxHighlighter>node server.js</SyntaxHighlighter>
    </Paragraph>
    <br />
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '-30px'}}>Creating our Chat app</h1>
    <img src={chat} style={{display: 'block', margin: 'auto'}}></img>
    <Paragraph>
      In React, our web pages are made up of small components that each have their own purpose/functionality. For this chat application, we will be breaking it up into the following components as shown in the diagram. <br />

      The file breakdown and components will look as such:
      <SyntaxHighlighter customStyle={{lineHeight: '26px'}}>
        {file}
      </SyntaxHighlighter>
      1. Let's setup the CSS for each component: <br />
      <a style={{fontWeight: 'bold'}}>Chat.css</a>
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {chatCSS}
      </SyntaxHighlighter>

      <a style={{fontWeight: 'bold'}}>InfoBar.css</a>
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {infoBar}
      </SyntaxHighlighter>

      <a style={{fontWeight: 'bold'}}>Message.css</a>
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {messageCSS}
      </SyntaxHighlighter>

      <a style={{fontWeight: 'bold'}}>Messages.css</a>
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {messages}
      </SyntaxHighlighter>

      <a style={{fontWeight: 'bold'}}>Input.css</a>
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {inputCSS}
      </SyntaxHighlighter>

      2. Now lets go over how to develop the logic behind the chat layout by specifying the dependencies first: <br />
      <SyntaxHighlighter showLineNumbers customStyle={{lineHeight: '24px'}}>
        {dependenciez}
      </SyntaxHighlighter>
      3. For the Chat component, we need to know the name of the user and the room they wish to join. You could use a form to ask the user to provide this information, and pass it to this Chat component. We will return the HTML, which is just a container that contains the other components for our chat application.
      <SyntaxHighlighter showLineNumbers startingLineNumber={8} customStyle={{lineHeight: '24px'}}>
        {chatcomp}
      </SyntaxHighlighter>
      We need to export the component so
      <SyntaxHighlighter showLineNumbers startingLineNumber={14} customStyle={{lineHeight: '24px'}}>
        export default Chat;
      </SyntaxHighlighter>

      4. With that, the basic portions of the chat should be developed, to see more features added to the application, <a href="https://github.com/Dev-Zhao/rio">check out our source code to the tutorial.</a>
    </Paragraph>



  </>

         
 
);

export default Tutorial;
