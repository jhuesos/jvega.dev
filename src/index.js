import './main.css';

// eslint-disable-next-line no-console
console.log('jvega.dev: Under construction. Coming soon...');

async function loadCriticalPathResources() {
  // Load Roboto font
  import(
    /* webpackPreload: true, webpackChunkName: 'roboton-font' */ '../static/fonts/roboto/roboto.css'
  );

  const { default: emailIcon } = await import(
    /* webpackPreload: true, webpackChunkName: 'email-icon' */ '../static/icons/email.svg'
  );
  const { default: homeIcon } = await import(
    /* webpackPreload: true, webpackChunkName: 'home-icon' */ '../static/icons/home.svg'
  );
  const { default: linkedinIcon } = await import(
    /* webpackPreload: true, webpackChunkName: 'linkedin-icon' */ '../static/icons/linkedin.svg'
  );

  document.getElementById('emailIcon').src = emailIcon;
  document.getElementById('homeIcon').src = homeIcon;
  document.getElementById('linkedinIcon').src = linkedinIcon;
}

// Bootstrap

// Delay loading icons as are not critical for the user experience. I aim
// to reduce the time to first content paint.
setTimeout(loadCriticalPathResources, 20);

document.addEventListener('DOMContentLoaded', () => {
  import(/* webpackChunkName: 'ReactApp' */ './App.jsx');
});
