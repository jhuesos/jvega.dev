# jvega.dev

## Set up

### Install dependencies

```
yarn
```

### Certificates

> This instructions only work in Unix environments I think

1. Install `mkcert` package. For Arch linux, it is in the AUR.
1. Run `mkcert --install`. Don't forget to restart all your browsers!
1. From a location **outside** the project run `mkcert localhost`
1. Add to the `.env` file in the root to the project these two new entries:

```
HTTPS_KEY_FILE="/full/path/to/your/localhost-key.pem"
HTTPS_CERT_FILE="/full/path/to/your/localhost.pem"
```

## Run the site

```bash
yarn start
```

## Generate *dist*s version

```
yarn build
```
