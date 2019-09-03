/* globals document:false */
import './main.css';

// eslint-disable-next-line no-console
console.log('jvega.dev: Under construction. Coming soon...');

async function loadCriticalPathResources() {
  // Load Roboto font
  import(/* webpackPreload: true */ '../static/fonts/roboto/roboto.css');

  const { default: emailIcon } = await import(
    /* webpackPreload: true */ '../static/icons/email.svg'
  );
  const { default: homeIcon } = await import(
    /* webpackPreload: true */ '../static/icons/home.svg'
  );
  const { default: linkedinIcon } = await import(
    /* webpackPreload: true */ '../static/icons/linkedin.svg'
  );

  document.getElementById('emailIcon').src = emailIcon;
  document.getElementById('homeIcon').src = homeIcon;
  document.getElementById('linkedinIcon').src = linkedinIcon;
}

async function loadNonCriticalResources() {
  const { default: githubIcon } = await import('../static/icons/github.svg');

  const githubIconEle = document.getElementById('githubIcon');
  githubIconEle.src = githubIcon;
  document.querySelector('.main-navigation').classList.remove('hidden');
}

// Bootstrap
setTimeout(loadCriticalPathResources, 20);
setTimeout(loadNonCriticalResources, 200);
