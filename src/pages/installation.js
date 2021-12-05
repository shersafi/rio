import InstallationHero from '../components/InstallationHero/IHero';
import { Layout } from '../layout/Layout';
import { Container } from '../styles/GlobalComponents';


const Installation = () => {
    return (
      <Layout>
        <Container> 
          <InstallationHero/>
        </Container> 
     </Layout>
    
    );
  };
  
export default Installation;