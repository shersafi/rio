import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { SocialIcons } from '../Header/HeaderStyles';
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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made by Sher Safi, Charlie Zhao, and Mijal Shrestha</Slogan>
        </CompanyContainer>
        <Link href="https://github.com/shersafi/rio">
          <SocialIcons>
            <AiFillGithub size='3rem' color="#2C1338"/>
          </SocialIcons>
        </Link>
        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
