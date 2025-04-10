// import ConclusionHero from '../components/ConclusionHero/ConclusionHero';
import { Layout } from '../layout/Layout';
import { Section, Container, Container2, Container5 } from '../styles/GlobalComponents';
import styled, { keyframes } from 'styled-components';
import Head from 'next/head';

const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

const Loader = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 49%;
  right: 0;
  margin-top: -9px;
  width: 55px;
  height: 55px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: black;
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
  
`;

const Demo = () => {
  return (
    <Layout>
      <Head>
          <title>Rio | Demo</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> 
      <Container5>
          <Loader />  
          <iframe style={{position: 'relative', width: '100%', height: '800px', zIndex: '2'}} src="https://rio-client.herokuapp.com/"></iframe>
          
      </Container5>  
    </Layout>
  
  );
};
  
 export default Demo;
