import React from 'react';
import { A, usePath } from 'hookrouter';

import githubIcon from '../../../../static/icons/github.svg';
import './Menu.css';

export default function Menu() {
  const currentPath = usePath();

  return (
    <nav className="main-navigation">
      <A
        href="/about-me"
        aria-current={currentPath === '/about-me' ? 'page' : ''}
      >
        About me
      </A>

      {/* Links with no href work as disable links. HREF was removed on purpose */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a aria-current={currentPath === '/about-thispage' ? 'page' : ''}>
        About this page
      </a>

      <a
        href="https://github.com/jhuesos/jvega.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="githubIcon"
          className="icon-img"
          height="32px"
          width="32px"
          src={githubIcon}
          alt="Gitbub logo that acts as a link to the repository in Github that contains the code of this website"
        />
      </a>
    </nav>
  );
}
