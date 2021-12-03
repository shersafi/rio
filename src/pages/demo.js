// import ConclusionHero from '../components/ConclusionHero/ConclusionHero';
import { Layout } from '../layout/Layout';
import { Section, Container, Container2, Container5 } from '../styles/GlobalComponents';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

const Loader = styled.div`
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
  z-index: 1;
  
`;

const Demo = () => {
  return (
    <Layout>
      <Container5>
          <Loader />  
          <iframe style={{position: 'relative', width: '100%', height: '800px', zIndex: '2'}} src="https://rio-client.herokuapp.com/chatroom"></iframe>
          
      </Container5>  
    </Layout>
  
  );
};
  
 export default Demo;