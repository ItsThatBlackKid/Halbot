# Halbot
A chat agent designed to help RMIT CS Students find information about their program. 

## Getting started 
### Pre-reqs
* Ensure you have Node `v18+` installed.
* Ensure you have installed `yarn` (see FAQ)
* Halbot is split into a frontend and backend folder
  * The frontend is a React application which communicates with ther server
  * The server is written in express.

### Installing deps
* Run `yarn` or `yarn install`
  * Dependencies should install into both the `frontend` and `server` folders

### Running app
* Run `yarn dev` in the root folder to launch both the `frontend` and `server`
* OR you can run `yarn dev` in the `frontend` to run just the `frontend`
* OR you can run `yarn dev` in the `server` to run just the `server`

## Branching strategy
* Adhere to short-lived branches, with frequent merges from the master branch.
* Merge commits to master by raising a PR in GitHub. 

## FAQ
Q: How do I install yarn? 
>`npm i -g yarn`

Q: How do I instlal `node`?
> Use [nvm](https://github.com/nvm-sh/nvm) or follow the official `node` [docs](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)