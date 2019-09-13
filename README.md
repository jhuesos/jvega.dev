# jvega.dev

![Travis (.org)](https://img.shields.io/travis/jhuesos/jvega.dev?style=for-the-badge)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/jhuesos/jvega.dev?style=for-the-badge)
![Codacy grade](https://img.shields.io/codacy/grade/57a0aabfeed947b2a198f48473049b86?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/jhuesos/jvega.dev?style=for-the-badge)
![Uptime Robot status](https://img.shields.io/uptimerobot/status/m783451049-ff12c48e287d94ad60297429?style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg?style=for-the-badge)](https://conventionalcommits.org)

This repository contains the code of my personal website [jvega.dev](https://www.jvega.dev).

I am writing some blog posts about building the site. You can fine them in
[dev.to](https://dev.to/jvegadev/making-the-website-secure-by-adding-additional-http-headers-in-netlify-and-zeit-now-3mae).

## Set up

### Install dependencies

    yarn

### Certificates

> This instructions only work in Unix environments I think

1.  Install `mkcert` package. For Arch linux, it is in the AUR.
2.  Run `mkcert --install`. Don't forget to restart all your browsers!
3.  From a location **outside** the project run `mkcert localhost`
4.  Add to the `.env` file in the root to the project these two new entries:


        HTTPS_KEY_FILE="/full/path/to/your/localhost-key.pem"
        HTTPS_CERT_FILE="/full/path/to/your/localhost.pem"

## Run the site

    yarn start

## Generate production version

    yarn build
