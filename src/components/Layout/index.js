import React from 'react';

import Header from '../Header';
import Title from '../Title';
import Main from '../Main';
import Footer from '../Footer';
import GlobalStyle from '../../styles/global';

import * as S from './styled';

const Layout = () => (
  <>
    <GlobalStyle />
    <Header />
    <S.LayoutWrapper>
      <Title />
      <Main />
      <Footer />
    </S.LayoutWrapper>
  </>
);

export default Layout;
