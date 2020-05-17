import 'regenerator-runtime/runtime';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePath, useInterceptor } from 'hookrouter';
import ReactGA from 'react-ga';

import './App.css';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const { GA_ID } = process.env;

const Menu = lazy(() =>
  import(/* webpackPreload: true,  webpackChunkName: 'Menu' */ './Menu'),
);
const ContentContainer = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName: 'ContentContainer' */ './ContentContainer'
  ),
);

const useDocumentExpanded = () => {
  const isHomePage = usePath() === '/';
  if (isHomePage) {
    document.body.classList.remove('expanded');
  } else {
    document.body.classList.add('expanded');
  }
};

const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(GA_ID, { debug: !IS_PRODUCTION });
    ReactGA.pageview(document.location.pathname);
  }, []);

  const interceptFunction = (_, nextPath) => {
    ReactGA.pageview(nextPath);
    return nextPath;
  };
  useInterceptor(interceptFunction);
};

const App = () => {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    setIsAppLoaded(true);
  }, []);

  const isHomePage = usePath() === '/';
  useDocumentExpanded();
  useAnalytics();

  return (
    <div className={`app${!isHomePage ? ' expanded' : ''}`}>
      <div className="navigation-container">
        {isAppLoaded && (
          <Suspense fallback={null}>
            <Menu />
          </Suspense>
        )}
      </div>
      <main className="content-container">
        {isAppLoaded && (
          <Suspense fallback={null}>
            <ContentContainer />
          </Suspense>
        )}
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('appContainer'));

export default App;
