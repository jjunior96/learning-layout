import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Home</h1>
    <Layout />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
