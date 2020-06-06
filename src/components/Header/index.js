import React from 'react';

import Logo from '../Logo';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Header = () => (
  <S.HeaderWrapper>
    <Logo />
    <MenuLinks />
  </S.HeaderWrapper>
);

export default Header;
