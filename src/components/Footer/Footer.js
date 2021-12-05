import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { SocialIcons } from '../Header/HeaderStyles';
import { useWindowSize } from "@reach/window-size";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Social = () => {
  const { width } = useWindowSize();

  if (width > 700) return (
    <Link href="https://github.com/shersafi/rio">
      <SocialIcons>
        <AiFillGithub size='3rem' color="#2C1338"/>
      </SocialIcons>
    </Link>
  )

  return null;
}

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made by Sher Safi, Yu Chen Zhao, and Mijal Shrestha</Slogan>
        </CompanyContainer>
        <Social />
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
