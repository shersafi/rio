import TutorialHero from '../components/TutorialHero/THero';
import { Layout } from '../layout/Layout';
import { Section, Container6, Container7} from '../styles/GlobalComponents';

const Tutorial = () => {
    return (
      <Layout>
        <br /><br /><br />   
        <p style={{textAlign: 'center', fontSize: '46px', fontWeight: 'bold'}}>Create a Chat app With SocketIO!</p>
        <Container6> 
          <TutorialHero/>
        </Container6> 
     </Layout>
    
    );
  };
  
export default Tutorial;