import TeamHero from '../components/TeamHero/TeamHero';
import { Layout } from '../layout/Layout';
import { Container4 } from '../styles/GlobalComponents';
import Head from 'next/head';

const Conclusion = () => {
    return (
      <Layout>
        <Head>
          <title>Rio | Team</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Container4>
          <TeamHero/>
        </Container4>
      </Layout>   
      
      
    
    );
  };
  
  export default Conclusion;