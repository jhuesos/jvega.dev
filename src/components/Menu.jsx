import React from 'react';

import githubIcon from '../../static/icons/github.svg';

export default function Menu() {
  return (
    <nav className="main-navigation">
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
