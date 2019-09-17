import React from 'react';

import { SecurityHeaderImage } from '../../helpers/images';

import './AboutThisPage.css';

import reactLogo from '../../../static/icons/react.svg';
import webpackLogo from '../../../static/icons/webpack.svg';
import babelLogo from '../../../static/icons/babel.svg';
import eslintLogo from '../../../static/icons/eslint.svg';
import pwaLogo from '../../../static/icons/pwa.svg';
import postcssLogo from '../../../static/icons/postcss.svg';
import prettierLogo from '../../../static/icons/prettier.svg';
import lighthouseLogo from '../../../static/icons/lighthouse.svg';

const AboutThisPage = () => {
  return (
    <article className="about-thispage content">
      <div className="left-column">
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
          <h2>Security</h2>
          <p>
            This website is trying to follow the latest and greatest security
            standards available on the market. So the site has achieved and
            security score of A+ according to the&nbsp;
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
        <section>
          <h2>Performance</h2>
          <p>Performance</p>
        </section>
        <section>
          <h2>Progressive Web Application (PWA)</h2>
          <p>Coming soon...</p>
        </section>
      </div>

      <div className="right-column">
        <section>
          <h2>Stack</h2>
          <p>
            <img
              className="stack-logo"
              src={reactLogo}
              alt="React logo"
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={webpackLogo}
              alt="Webpack logo"
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={babelLogo}
              alt="Babel logo"
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={eslintLogo}
              alt="Eslint logo"
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={pwaLogo}
              alt="PWA logo"
              style={{height: '70px', margin: '24px 0'}}
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={postcssLogo}
              alt="PostCSS logo"
              style={{margin: '24px 0'}}
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={prettierLogo}
              alt="Prettier logo"
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={lighthouseLogo}
              alt="Lighthouse logo"
              style={{height: '120px'}}
            />
          </p>
        </section>
      </div>
    </article>
  );
};

export default AboutThisPage;
