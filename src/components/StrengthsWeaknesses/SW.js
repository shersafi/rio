import React from 'react';
import { HiFastForward, HiHeart, HiClipboardCheck, HiTrendingUp, HiRefresh, HiEye, HiArchive, HiPlusSm, HiLightningBolt, HiArrowsExpand, HiOutlineCubeTransparent, HiExclamation } from 'react-icons/hi';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './SWStyles';

const SW = () => (
  <Section id='tech'>
    <br />
    <br />
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px'}}>Strengths & Weaknesses</h1>
    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '20px'}}>💪ReactJS's Strengths</h1>
    <br />
    <List>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiHeart size='3rem' color="black" />
        </picture>
        <ListContainer>
          <ListTitle>Easy-to-use</ListTitle>
          <ListParagraph>
            Strong community support <br />
            and documentation for beginners
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiClipboardCheck color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Modular</ListTitle>
          <ListParagraph>
            React deals in components <br />
            which allow you to easily re-use code
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiFastForward color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Fast</ListTitle>
          <ListParagraph>
            Create efficient <br />
            & optimized websites quickly
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <br />
      <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '-30px'}}>💪NodeJS's Strengths</h1>
      <br />
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiPlusSm size='3rem' color="black" />
        </picture>
        <ListContainer>
          <ListTitle>Scalable</ListTitle>
          <ListParagraph>
            NodeJS apps can easily be scaled <br />
            for larger apps with extra resources
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiLightningBolt size='3rem' color="black" />
        </picture>
        <br />
        <ListContainer>
          <ListTitle>High performance</ListTitle>
          <ListParagraph>
            NodeJS runs through Google's V8 JS engine, <br />
            which is known to compile directly into machine code
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiHeart size='3rem' color="black" />
        </picture>
        <ListContainer>
          <ListTitle>Extensible</ListTitle>
          <ListParagraph>
            NodeJS is highly customizable and <br />
            can be setup with a vast amount of plug-ins
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />

    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '20px'}}>😔ReactJS's Weaknesses</h1>
    <br />
    <List>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiTrendingUp size='3rem' color="black" />
        </picture>
        <ListContainer>
          <ListTitle>Learning Curve</ListTitle>
          <ListParagraph>
            Using React requires JSX syntax <br />
            knowledge & is different from HTML.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiRefresh color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Pace</ListTitle>
          <ListParagraph>
            Things in React are constantly  <br />
            changing, making it hard to keep up.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiOutlineCubeTransparent color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Size</ListTitle>
          <ListParagraph>
            React's library is large<br />
            & often seen as bloated.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '20px'}}>😔NodeJS's Weaknesses</h1>
    <br />
    <List>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiExclamation size='3rem' color="black" />
        </picture>
        <ListContainer>
          <ListTitle>Unstable</ListTitle>
          <ListParagraph>
            Many of the different required libraries <br />
            are constantly changing, and hard to keep up with
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiArrowsExpand color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Asynchronous</ListTitle>
          <ListParagraph>
            Larger apps require an asynchronous <br />
            model, being less readible & harder to maintain
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{margin: 'auto'}}>
          <HiEye color="black" size='3rem' />
        </picture>
        <ListContainer>
          <ListTitle>Immature</ListTitle>
          <ListParagraph>
            NodeJS is a newer tool that has<br />
            a less robust library unlike other frameworks
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    
  </Section>
);

export default SW;
