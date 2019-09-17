import React from 'react';

import { SecurityHeaderImage } from '../../helpers/images';

import './AboutThisPage.css';

const AboutThisPage = () => {
  return (
    <article className="about-thispage content">
      <div className="left-column">
        <header>
          <h2>About this page</h2>
        </header>
        <p>
          In this section you can learn about the features and technologies I
          used to build this website. But first, two things:
        </p>

        <ul>
          <li>
            The code of this page is all available in
            <a
              href="https://github.com/jhuesos/jvega.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;https://github.com/jhuesos/jvega.dev
            </a>
            .
          </li>
          <li>
            I am writing a series of blog posts getting into more details on a
            few diferent topics. You can find the series in
            <a
              href="https://dev.to/jvegadev/making-the-website-secure-by-adding-additional-http-headers-in-netlify-and-zeit-now-3mae"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;https://dev.to/jvegadev/
            </a>
            .
          </li>
        </ul>

        <section>
          <h3>Security</h3>
          <p>
            This website is trying to follow the latest and greatest security
            standards available on the market. So the site has achieved and
            security score of A+ according to the
            <a
              href="https://securityheaders.com/?q=www.jvega.dev&followRedirects=on"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security Headers
            </a>
            &nbsp;website.
          </p>
          <div className="left-column-image">
            <SecurityHeaderImage />
          </div>
        </section>
      </div>

      <div className="right-column">
        <section>
          <h2>Stack</h2>
          <p>TEchnology stack...</p>
        </section>
      </div>
    </article>
  );
};

export default AboutThisPage;
