import ConclusionHero from '../components/ConclusionHero/ConclusionHero';
import { Layout } from '../layout/Layout';
import { Section, Container, Container2, Container3 } from '../styles/GlobalComponents';


const Conclusion = () => {
    return (
      <Layout>
        <Container> 
          <ConclusionHero/>
        </Container> 
     </Layout>
    
    );
  };
  
  export default Conclusion;