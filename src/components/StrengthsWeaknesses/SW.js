import React from 'react';
import { HiFastForward, HiHeart, HiClipboardCheck, HiTrendingUp, HiRefresh, HiArchive } from 'react-icons/hi';
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
    <h1 style={{color: '#1A202C', textAlign: 'center', marginTop: '80px'}}>React's Strengths and Weaknesses</h1>
    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '20px'}}>💪Strengths</h1>
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
    </List>
    <br />

    <h1 style={{color: '#9F5DC9', border: '30%', textAlign: 'center', marginTop: '30px', fontSize: '26px', marginBottom: '20px'}}>😔Weaknesses</h1>
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
            knowledge, and is different from HTML.
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
          <HiArchive color="black" size='3rem' />
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
  </Section>
);

export default SW;
