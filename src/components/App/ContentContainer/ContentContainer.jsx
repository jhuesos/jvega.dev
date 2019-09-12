import React from 'react';
import { useRoutes } from 'hookrouter';

import AboutMe from '../../AboutMe';
import AboutThisPage from '../../AboutThisPage';

const routes = {
  '/about-me': () => <AboutMe />,
  '/about-thispage': () => <AboutThisPage />,
};

export default function ContentContainer() {
  const match = useRoutes(routes);
  return <>{match}</>;
}
