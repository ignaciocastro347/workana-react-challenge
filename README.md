# Workana React Challenge

## Quick Start

### Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
2. Clone this Repository.
3. Build your container: `docker-compose build`
4. Run your container: `docker-compose up`

> [!WARNING]
> At the moment the repo has an issue which could not be fixed! Let's explain this below:

This repo uses Docker and GitHub Pages. The thing is that both could not work properly at the same time for now, I'll be looking for a solution until then.

### How to make Docker work!

Make sure that `next.config.mjs` file exists instead of `next.config.js` containing this content:

```
const nextConfig = {
  reactStrictMode: false,
};

export default nextConfig;
```
### How to make GitHub Pages work!

Make sure that `next.config.js` file exists instead of `next.config.mjs` containing this content:

```
const nextConfig = {
  reactStrictMode: false,
  output: "export",
};

module.exports = nextConfig;
```


# About this Challenge

### DO NOT PULL TO THIS REPOSITORY
### react-challenge

1. Create a fork of this public repository https://github.com/sebasworkana/react-challenge.git on your own repository, and push it to a branch called react-challenge and then send a PR to your main branch, finally give us access to this github user sebasworkana.
2. The main challenge is that you create a Page with the following Style and format.
[![React-Challenge.png](https://i.postimg.cc/nrNG2p2R/React-Challenge.png)](https://postimg.cc/30CGJMPm)
3. You need to enumerate all Periodic table of the elements on CSS class and make use of it, matching words in First name and last name “Highlighting” them as in the image.
4. First, install “react-redux”, then use the useDispatch and useSelector react-redux hooks in the components.
5. For this challenge use redux-thunk in it. Moreover, use the react-redux hooks to give a better impression and avoid older techniques. Share data among components without using props.
6. Is mandatory to use linter like ESLINT
7. Create npm scripts to run project and make sure to create a readme with instructions to
run project
8. Will be valuable if you can create Docker compose file to run all environment
9. Use github pages to host web app and test