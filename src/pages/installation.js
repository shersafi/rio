import InstallationHero from '../components/InstallationHero/IHero';
import { Layout } from '../layout/Layout';
import { Container } from '../styles/GlobalComponents';
import Head from 'next/head';

const Installation = () => {
    return (
      <Layout>
        <Head>
          <title>Rio | Install</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Container> 
          <InstallationHero/>
        </Container> 
     </Layout>
    
    );
  };
  
export default Installation;