import styled from 'styled-components';

export const Paragraph = styled.div`
  font-size: 20px;
  line-height: 55px;
  margin-left: 20%;
  margin-right: 20%;
  color: #1A202C;
  text-align: left;
  margin-bottom: 100px;
`;

export const Box1 = styled.div`
  font-weight: bolder;
  color: #2C1338;
  font-size: 30px;
  text-align: center;
  margin: auto;
  border-radius: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  backdrop-filter: blur(30.8477px);
  padding: 10px 10px 10px 10px;
  width: 60%;
  transform: translateY(-28%);
  border: 0.001em solid #dedede;

  background-image: linear-gradient(
    128.55deg, rgba(255, 255, 255, 0.5) -3.29%, rgba(255, 255, 255, 0) 98.07%);
  backdrop-filter: blur(30.8477px);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 90%;
    transform: translateY(-20%);
  }
`;

export const Content = styled.div`
  background: #fff;
  padding-top: 30px; 
  border-radius: 24px;
  width: 100%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;  backdrop-filter: blur(30.8477px);

`;