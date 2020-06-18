import React from 'react';

import SEO from '../components/seo';

const SignUpPage = () => (
  <div>
    <SEO title="Sign Up" />
    <form method="post" action="#" name="form">
      <label htmlFor="form">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="form">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="form">
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label htmlFor="form">
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  </div>
);

export default SignUpPage;
