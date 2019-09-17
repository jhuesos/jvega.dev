import React from 'react';

import {
  SecurityHeaderImage,
  PerformanceScoreImage,
} from '../../helpers/images';

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
          In this section, you can learn about the features and technologies I
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
            few different topics. You can find the series in
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

          <p>
            I wrote an article explaining the process I followed to set website
            as secure as possible, you can read it&nbsp;
            <a
              href="https://dev.to/jvegadev/making-the-website-secure-by-adding-additional-http-headers-in-netlify-and-zeit-now-3mae"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          <div className="left-column-image">
            <SecurityHeaderImage />
          </div>
        </section>
        <section>
          <h2>Performance</h2>
          <p>
            Even though this site is rather small, I wanted to get the best
            performance possible, applying some of the same techniques you would
            use in bigger websites (where they would have a much more
            significant impact).
          </p>
          <p>
            I followed the PRPL pattern,&nbsp;
            <a
              href="https://dev.to/jvegadev/making-the-website-fast-optimizing-the-page-critical-rendering-path-3g88"
              target="_blank"
              rel="noopener noreferrer"
            >
              use lazy loading and optimized the critical rendering path
            </a>
            . For images, I am serving transparently for the user different the
            best image format (JPG or WEBP) and size for the users depending on
            the browser support and viewport size.
          </p>

          <p>
            The goal is to get and keep a score in Google Lighthouse over 80 and
            as close as possible to 100. This is the current score:
          </p>

          <div className="left-column-image">
            <PerformanceScoreImage />
          </div>

          <p>
            The main reason I cannot get 100 at this moment is due to the
            restrictive Content Security Policy I chose for the site and the
            fact that I am hosting it a static hosting like Netlify. To support
            inline scripts and styles (to optimize further the critical
            rendering path) I would have to support dynamic HTTP Headers and
            index.html and both things are not possible in Netlify.
          </p>
        </section>
        <section>
          <h2>Accessibility</h2>
          <p>
            I am trying to make sure the page is accessible. But as I am not an
            expert on these topics, I am sure there is room for improvement.
            Feel free to reach out to me if you have any suggestions or
            complains
          </p>
        </section>
        <section>
          <h2 className="disabled">Progressive Web Application (PWA)</h2>
          <p>Coming soon...</p>
        </section>
      </div>

      <div className="right-column">
        <section>
          <h2>Stack</h2>
          <p>
            <img className="stack-logo" src={reactLogo} alt="React logo" />
          </p>
          <p>
            <img className="stack-logo" src={webpackLogo} alt="Webpack logo" />
          </p>
          <p>
            <img className="stack-logo" src={babelLogo} alt="Babel logo" />
          </p>
          <p>
            <img className="stack-logo" src={eslintLogo} alt="Eslint logo" />
          </p>
          <p>
            <img
              className="stack-logo"
              src={pwaLogo}
              alt="PWA logo"
              style={{ height: '70px', margin: '24px 0' }}
            />
          </p>
          <p>
            <img
              className="stack-logo"
              src={postcssLogo}
              alt="PostCSS logo"
              style={{ margin: '24px 0' }}
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
              style={{ height: '120px' }}
            />
          </p>
        </section>
      </div>
    </article>
  );
};

export default AboutThisPage;
