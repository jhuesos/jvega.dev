import 'regenerator-runtime/runtime';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { usePath } from 'hookrouter';

import './App.css';

const Menu = lazy(() =>
  import(/* webpackPreload: true,  webpackChunkName: 'Menu' */ './Menu'),
);
const ContentContainer = lazy(() =>
  import(/* webpackChunkName: 'ContentContainer' */ './ContentContainer'),
);

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
