import ConclusionHero from '../components/ConclusionHero/ConclusionHero';
import { Layout } from '../layout/Layout';
import { Section, Container, Container2, Container3 } from '../styles/GlobalComponents';
import Head from 'next/head';

const Conclusion = () => {
    return (
      <Layout>
        <Head>
          <title>Rio | Conclusion</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> 
        <Container> 
          <ConclusionHero/>
        </Container> 
     </Layout>
    
    );
  };
  
  export default Conclusion;