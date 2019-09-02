import './main.css';

async function loadCriticalPathResources() {
  // Load Roboto font
  import('../static/fonts/roboto/roboto.css');

  const { default: emailIcon } = await import('../static/icons/email.svg');
  const { default: homeIcon } = await import('../static/icons/home.svg');
  const { default: linkedinIcon } = await import(
    '../static/icons/linkedin.svg'
  );

  /* globals document:false */
  document.getElementById('emailIcon').src = emailIcon;
  document.getElementById('homeIcon').src = homeIcon;
  document.getElementById('linkedinIcon').src = linkedinIcon;
}

loadCriticalPathResources();
