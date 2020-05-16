import 'core-js';
import './Theme.css';
import './main.css';

function loadApp() {
  import(
    /* webpackPreload: true, webpackChunkName: 'ReactApp' */ './components/App'
  ).then(() => {
    if (document.location.pathname !== '/') {
      document.body.classList.add('expanded');
    }
  });
}

function loadCriticalPathResources() {
  Promise.all([
    import(
      /* webpackPreload: true, webpackChunkName: 'email-icon' */ '../static/icons/email.svg'
    ),
    import(
      /* webpackPreload: true, webpackChunkName: 'home-icon' */ '../static/icons/home.svg'
    ),
    import(
      /* webpackPreload: true, webpackChunkName: 'linkedin-icon' */ '../static/icons/linkedin.svg'
    ),
  ]).then(function onSvgIconsLoaded([
    { default: emailIcon },
    { default: homeIcon },
    { default: linkedinIcon },
  ]) {
    document.getElementById('emailIcon').src = emailIcon;
    document.getElementById('homeIcon').src = homeIcon;
    document.getElementById('linkedinIcon').src = linkedinIcon;

    // Continue loading with the rest of the resouces
    setTimeout(loadApp, 100);
  });
}

// // Bootstrap
// Delay loading icons as are not critical for the user experience. I aim
// to reduce the time to first content paint.
setTimeout(loadCriticalPathResources, 20);

// FIXME: Temporary disabling SW
if ('serviceWorker' in navigator) {
  // window.addEventListener('load', () => {
  //   navigator.serviceWorker.register('/sw.js');
  // });

  /* eslint-disable no-restricted-syntax, prefer-const */
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
