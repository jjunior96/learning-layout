import React from 'react';

import Header from '../Header';
import GlobalStyle from '../../styles/global';

import * as S from './styled';

const Layout = () => (
  <S.LayoutWrapper>
    <GlobalStyle />
    <Header />
    <h2>Title</h2>
    <main>Main</main>
    <footer>Footer</footer>
  </S.LayoutWrapper>
);

export default Layout;
