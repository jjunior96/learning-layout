import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styled';

const Logo = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "blog.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <S.LogoLink to="/">
      <Img fixed={logo.childImageSharp.fixed} />;
    </S.LogoLink>
  );
};

export default Logo;
