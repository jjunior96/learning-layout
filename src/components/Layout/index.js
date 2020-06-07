import React from 'react';

import Header from '../Header';
import Title from '../Title';
import Main from '../Main';
import GlobalStyle from '../../styles/global';

import * as S from './styled';

const Layout = () => (
  <>
    <GlobalStyle />
    <Header />
    <S.LayoutWrapper>
      <Title />
      <Main />
      <footer>Footer</footer>
    </S.LayoutWrapper>
  </>
);

export default Layout;
