import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  margin-left: 5%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  
`;

export const RightSection = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 10%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  font-size: 14.5px;


  .code-body {
    font-family: Consolas;
    margin-left: 6px;
    font-size: 14.5px;
  }

  .line-num {
    color: white;
    display: block;
    line-height: 17px;
  }


  .dot1 {
    float: left;
    transform: translateX(40%);
    margin-left: 4px;
    margin-top: 7px;
    z-index: 50;
    border-radius: 50%;
    background-color: #FF7068;
    height: 10px;
    width: 10px;
  }

  .dot2 {
    float: left;
    transform: translateX(40%);
    margin-left: 4px;
    margin-top: 7px;
    z-index: 50;
    border-radius: 50%;
    background-color: #FFC443;
    height: 10px;
    width: 10px;
  }

  .dot3 {
    float: left;
    transform: translateX(40%);
    margin-left: 4px;
    margin-top: 7px;
    z-index: 50;
    border-radius: 50%;
    background-color: #3DCE53;
    height: 10px;
    width: 10px;
  }


  
`;

export const Container = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 110px;
  max-width: 1280px;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 70%;
    display: flex;
    grid-gap: 0px;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Child = styled.div`
  margin-top: -20px;
  width: 110%;
`;

export const Button1 = styled.button`
   border: none;
   background-color: #2C1338;
   padding: 2px 10px;
   text-align: center;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   border-radius: 8px 8px 0 0;
   display: inline;
   margin-left: 18px;
   margin-top: 3px;
   cursor: pointer;

   &:focus {
    background-color: #E57084;
    outline: none;
   }

   
`;

export const Button2 = styled.button`
   border: none;
   background-color: #2C1338;
   padding: 2px 10px;
   text-align: center;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   border-radius: 8px 8px 0 0;
   display: inline;
   margin-left: 8px;
   margin-top: 3px;
   cursor: pointer;

   &:focus {
    background-color: #E57084;
    outline: none;
   }
`;