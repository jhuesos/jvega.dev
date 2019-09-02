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

  /* globals document:false */
  document.getElementById('emailIcon').src = emailIcon;
  document.getElementById('homeIcon').src = homeIcon;
  document.getElementById('linkedinIcon').src = linkedinIcon;
}

setTimeout(loadCriticalPathResources, 20);
