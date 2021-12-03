import React from 'react';
import Link from 'next/link';
import { Paragraph } from './IHeroStyles';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  SectionDivider,
} from '../../styles/GlobalComponents';

const node = `This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See "npm help json" for definitive documentation on these fields
and exactly what they do.

Use "npm install <pkg>" afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my-node-server)`;

const confirm = `About to write to C:\\Users\\Charlie\\Desktop\\my-node-server\\package.json:

{
  "name": "my-node-server",
  "version": "1.0.0",
  "description": "None",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes) yes`;

const CH = () => (
  <>
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px', paddingTop: '40px'}}>How to Install the Frameworks on Windows</h1>
    
    <h2 style={{color: '#1A202C', textAlign: 'left', marginTop: '20px', marginLeft: '5%', textDecoration: 'underline'}}>Installing Node.JS:</h2>
    <h3 style={{color: '#1A202C', textAlign: 'left', marginTop: '20px', marginLeft: '5%', lineHeight: '40px', fontWeight: 'lighter'}}>
      1. Go <Link href=" https://nodejs.org/en/"><a style={{color: 'red', fontWight: 'bold'}}>here</a></Link> and download Node.js. <br />
      2. Open the downloaded file. <br />
      3. Click “install” after following the instructions. A pop up will appear asking for permission to make changes to your device. <br />
      4. Create a folder for your server project. <br />
      5. Using a terminal go to the folder you have just created. <br />
      6. Run this command on your terminal: <br />
      <SyntaxHighlighter customStyle={{maxWidth: '95%'}}>
        npm init
      </SyntaxHighlighter>
      <p style={{fontStyle: 'italic', textAlign: 'center', width: '95%', fontSize: '18px', marginBottom: '15px'}}>This will allow you to initialize the node server project and create the necessary files. You will be prompted to enter the package name, version, description, etc. The default values for these fields are displayed inside round brackets (). If you don’t want to change the defaults you can just leave the field empty and hit enter.</p>
      <a style={{fontWeight: 'bold'}}>Note: If you want to change this information later on, all you need to do is open and edit “package.json” file.</a> <br />
      <SyntaxHighlighter customStyle={{maxWidth: '95%'}}>
        {node}
      </SyntaxHighlighter>
      7. Finally you will be prompted to verify the information you have entered and confirm:
      <SyntaxHighlighter customStyle={{maxWidth: '95%'}}>
        {confirm}
      </SyntaxHighlighter>
      8. Our package.json has been set up. We can now begin writing code. Create a file named “index.js”. This is where we will write our server program. <br />
      <a style={{fontWeight: 'bold'}}>Note: if you may rename “index.js” to something else, but make sure you change the “main” property inside “package.json” to whatever filename you are using.</a> <br />
    </h3>
    <br />
  
    <br />

    <h2 style={{color: '#1A202C', textAlign: 'left', marginTop: '20px', marginLeft: '5%', textDecoration: 'underline'}}>Installing React:</h2>


    <h3 style={{color: '#1A202C', textAlign: 'left', marginTop: '20px', marginLeft: '5%', lineHeight: '40px', fontWeight: 'lighter'}}>
      1. Create a working directory <br />
      2. Go inside the folder you just created using a terminal. <br />
      3. Run this command on your terminal: <br />
      <SyntaxHighlighter customStyle={{maxWidth: '95%'}}>
        npm create-react-app filename
      </SyntaxHighlighter>
      4. Open the folder you created using a code editor. You will see a new folder created inside the folder you created in step 4. <br />
      5. Go into the my-app folder using the terminal. <br />
      6. Run this command on your terminal: <br />
      <SyntaxHighlighter customStyle={{maxWidth: '95%'}}>
        npm start
      </SyntaxHighlighter>
      <a style={{fontWeight: 'bold'}}>**A browser will open on the screen. This is the website you will be working on.**</a>
    </h3>
    <br />
    <br />
    <SectionDivider colorAlt />

    <br />

  </>

         
 
);

export default CH;
