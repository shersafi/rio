import styled from 'styled-components';
import pattern from "../../../public/images/patternbg.png"

export const Boxes = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    grid-template-columns: 220px 220px;
    margin: auto;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: none;
    margin: auto;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: none;
    margin: auto;
  }

  
`;

export const Box = styled.div`
  background: url(${pattern}) no-repeat, #2C1338;
  border-radius: 12px;
  height: 160px;
  width: 230px;
  padding: 24px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  
}
`;
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

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 40px 40px 0 0;
`;

export const Paragraph = styled.div`
  font-size: 18px;
  line-height: 30px;
  margin-left: 5%;
  margin-right: 5%;
  color: #1A202C;
  text-align: center;
  margin-bottom: 100px;
`;

