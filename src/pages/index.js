import Popularity from '../components/Popularity/Popularity';
import Hero from '../components/Hero/Hero';
import SW from '../components/StrengthsWeaknesses/SW';
import Use from '../components/Use/Use';
import { Layout } from '../layout/Layout';
import Head from 'next/head';
import { Section, Container, Container2, Container3 } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Head>
      <title>Rio | Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>        
        <Popularity />
      </Container>
      <Container2>
        <SW />
      </Container2>
      <Container3>
        <Use />
      </Container3>
      <br />
    </Layout>
    
    
  );
};

export default Home;
