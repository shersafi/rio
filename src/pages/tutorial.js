import InstallationHero from '../components/InstallationHero/IHero';
import { Layout } from '../layout/Layout';
import { Section, Container, Container2, Container3 } from '../styles/GlobalComponents';


const Tutorial = () => {
    return (
      <Layout>
        <Container> 
          <InstallationHero/>
        </Container> 
     </Layout>
    
    );
  };
  
export default Tutorial;