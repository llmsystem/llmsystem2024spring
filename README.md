# CMU 11868 Large Language Model Systems Spring 2024 

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

The following are for manual build and compilation. The automatic workflow is already enable on github so that every time pushing to github, it will automatically trigger build and deployment. 

### Installation
The following assume using yarn. YOu may use `npm` as well. 

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

