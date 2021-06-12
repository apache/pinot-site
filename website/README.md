# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

NOTE: You need to install [YARN](https://classic.yarnpkg.com/en/docs/install)

## Installation

```bash
$ yarn
```

### Local Development

```bash
$ yarn start
```

Link Check:

```bash
yarn lint-check
-> All matched files use Prettier code style!
```

Then try out:

```bash
yarn run serve --build --port 3001 --host 0.0.0.0
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
$ GIT_USER=[USER_ID] USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Add Blogs

To add new blogs to site, just create new MD file in `website/blog/`

Follow the format `YYYY-MM-DD-Company-Name`
Example:  `website/blog/2017-09-17-Restaurant-Manager.md`

Then fill in all the sections titles, author, etc..

Example: https://raw.githubusercontent.com/apache/incubator-pinot-site/ff73eceb6fa5f8128d9332bf95f92eab2d9c5b6a/website/blog/2017-09-17-Restaurant-Manager.md

## Adding new Companies

To add new companies who are using Apache Pinot, just add new blog in [website/src/data/companies-data.js](./src/data/companies-data.js)

Example of Company with both Light and Dark mode Logo:

```json
  {
    name: 'Confluera',
    website: 'https://www.confluera.com/',
    logo: '/img/companies/confluera_light.svg',
    darkLogo: '/img/companies/confluera_dark.svg',
    enable_dark_logo: true
  }
```

Example of Company with just one logo:

```json
  {
    name: 'Microsoft',
    website: 'https://teams.microsoft.com',
    logo: '/img/companies/MicrosoftTeamPost2018.svg',
    enable_dark_logo: false
  },
```

Note: logo can just be any public svg link or add new svg file in [website/static/img/companies](./static/img/companies) folder
