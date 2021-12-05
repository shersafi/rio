import TutorialHero from '../components/TutorialHero/THero';
import { Layout } from '../layout/Layout';
import { Section, Container6, Container7} from '../styles/GlobalComponents';
import Head from 'next/head';

const Tutorial = () => {
    return (
      <Layout>
        <Head>
          <title>Rio | Tutorial</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>  
        <br /><br /><br />   
        <p style={{textAlign: 'center', fontSize: '46px', fontWeight: 'bold'}}>Create a Chat app With SocketIO!</p>
        <Container6> 
          <TutorialHero/>
        </Container6> 
     </Layout>
    
    );
  };
  
export default Tutorial;