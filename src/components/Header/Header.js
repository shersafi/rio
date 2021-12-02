import Link from 'next/link';
import React from 'react';
import logo from "../../../public/logo.png";
import { slide as Menu } from 'react-burger-menu';
import { useWindowSize } from "@reach/window-size";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div5,
  NavLink,
  SocialIcons,
  Span,
  showHide,
} from './HeaderStyles';

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '26px',
    height: '20px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
}

const MenuContainer = ({ children }) => {
  const { width } = useWindowSize();

  if (width < 1000) return <Menu right styles={styles}>{children}</Menu>

  return children;
}

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
          }}
        >
        <img src={logo}></img>  
        </a>
      </Link>
    </Div1>
    <Div2>
      <MenuContainer>
        <li>
          <Link href='/'>
              <NavLink>Introduction</NavLink>
          </Link>
        </li>
        <li>
          <Link href='installation'>
            <NavLink>Installation</NavLink>
          </Link>
        </li>
        <li>
          <Link href='tutorial'>
            <NavLink>Tutorial</NavLink>
          </Link>
        </li>
        <li>
          <Link href='demo'>
            <NavLink>Demo<a style={{fontSize : "10px", bottom : "5px", left: "2px", position : "relative"}}>↗</a></NavLink>
          </Link>
        </li>
        <li>
          <Link href='conclusion'>
            <NavLink>Conclusion</NavLink>
          </Link>
        </li>
        <li>
          <Link href='team'>
            <NavLink>Team</NavLink>
          </Link>
        </li>
      </MenuContainer>
    </Div2>

  </Container>
);

export default Header;
