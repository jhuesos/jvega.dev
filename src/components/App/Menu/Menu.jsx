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
        className={currentPath === '/about-me' ? 'active' : ''}
      >
        About me
      </A>
      <A
        href="/about-thispage"
        className={currentPath === '/about-thispage' ? 'active' : ''}
      >
        About this page
      </A>

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
