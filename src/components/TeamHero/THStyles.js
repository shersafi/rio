import styled from 'styled-components';

export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-left: 14%;
  margin-right: 14%;
  color: #1A202C;
  text-align: center;
  margin-bottom: 100px;
`;

export const Boxes = styled.div`
  background-color: #fff;
  gap: 10px;
  display: grid;
  grid-template-columns: 450px 450px 450px;
  margin: auto;

  @media screen and (max-width: 1450px) {
    grid-template-columns: none;
    margin: auto;
  }


  
`;

export const Box = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 30px rgb(0 0 0 / 8%);
  height: 300px;
  width: 400px;
  padding: 24px;
  

  
}`;

export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
