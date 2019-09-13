# jvega.dev

![Travis (.org)](https://img.shields.io/travis/jhuesos/jvega.dev)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/jhuesos/jvega.dev?style=flat-square)

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

```bash
yarn start
```

## Generate production version

    yarn build
