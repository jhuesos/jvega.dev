import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'hookrouter';

import './ContentContainer.css';

const AboutMe = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:'AboutMe' */ '../../AboutMe'
  ),
);

const AboutThisPage = lazy(() =>
  import(/* webpackChunkName:'AboutThisPage' */ '../../AboutThisPage'),
);

const routes = {
  '/about-me': () => <AboutMe />,
  '/about-thispage': () => <AboutThisPage />,
};

export default function ContentContainer() {
  const match = useRoutes(routes);
  return <Suspense fallback={null}>{match}</Suspense>;
}
