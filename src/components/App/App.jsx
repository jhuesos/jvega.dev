import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePath } from 'hookrouter';

import './App.css';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

const useDocumentExpanded = () => {
  const isHomePage = usePath() === '/';
  if (isHomePage) {
    document.body.classList.remove('expanded');
  } else {
    document.body.classList.add('expanded');
  }
};

const App = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setIsAppLoaded(true);
  }, []);

  const isHomePage = usePath() === '/';
  useDocumentExpanded();

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="name-title-container">
            <h1>Jaime Vega</h1>
            <h2>
              <span>Front-end engineer / </span>
              <span>Tech lead</span>
            </h2>
          </div>
          <address className="contact-info-container">
            <div className="contact-line">
              <img
                id="emailIcon"
                className="icon-img"
                height="24px"
                width="24px"
                aria-hidden="true"
                alt=""
              />
              <a href="mailto:jaime.vega@gmail.com">jaime.vega@gmail.com</a>
            </div>
            <div className="contact-line">
              <img
                id="homeIcon"
                className="icon-img"
                height="24px"
                width="24px"
                aria-hidden="true"
                alt=""
              />
              <a href="https://www.jvega.dev">https//www.jvega.dev</a>
            </div>
            <div className="contact-line">
              <img
                id="linkedinIcon"
                className="icon-img"
                height="24px"
                width="24px"
                aria-hidden="true"
                alt=""
              />
              <a
                href="https://linkedin.com/in/jvegadev"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://linkedin.com/in/jvegadev
              </a>
            </div>
          </address>
        </div>
      </header>
      <div className={`app${!isHomePage ? ' expanded' : ''}`}>
        <div className="navigation-container">{isAppLoaded && <Menu />}</div>
        <main className="content-container">
          {isAppLoaded && <ContentContainer />}
        </main>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('appContainer'));

export default App;
