# StudyHunt-Frontend

http://studyhunt.galenhan.com

React based frontend for StudyHunt.

## Installation

```
npm install -g create-react-app
```

**Install [yarn](https://yarnpkg.com/)**
```
# Then run:
yarn install

## Run

Start the dev server

```
yarn start
```

Build the frontend for production

```
yarn run build
```

## View debug

We use the [debug](https://github.com/visionmedia/debug) module to log to console.

Within the browser console execute the following command:

```
localStorage.debug = 'app:*'
```

To toggle the Redux history panel press `Ctrl + H` when the web app is open in your browser.

## Deploy

```
npm install -g surge

yarn run deploy
```
