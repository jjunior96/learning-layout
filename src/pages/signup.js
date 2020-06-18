import React from 'react';

import Form from '../components/Signup/Form';
import GlobalStyle from '../styles/global';
import SEO from '../components/seo';

const SignUpPage = () => (
  <div>
    <GlobalStyle />
    <SEO title="Sign Up" />
    <Form />
  </div>
);

export default SignUpPage;
