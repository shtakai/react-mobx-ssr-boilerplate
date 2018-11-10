# React + Mobx + SSR starter
<img src="https://i.imgur.com/OCnmHXV.gif" />

### Description

Minimalistic Isomorphic TODO list application that benefit of SSR (server side rendering), already set up with:
- React 16 + React Router 4
- MobX 5.5 (state management library)
- Node + Express
- reactive approach to update component state (using ES2016 decorators e.g. @observable, @observer)
- Flow (static type checking at compile time)
- Webpack with a configurations for both dev and prod environments
- Unit testing with Jest
- Sass compilation
- Custom VScode config for debugging

This app doesn't add any unuseful complexity, just a simple TODO list implemented following the best practice with some useful npm tasks for build and run your app

### Build and run

Install:
```
yarn install or npm install 
```

Build:
```
npm run build or npm run build:prod
```

Run:
```
npm run start or npm run start:prod
```

### Dev and Prod
- The starter comes with two webpack configurations for devevelopment and production environments.
- To speed up the dev environment the app comes with HMR enabled and already configured with Sass Hot reload and React hot loader.


### Flow
The project relies on <a href="https://github.com/flowtype/flow-bin#readme">Flow</a> being installed globally, if you're experiencing any syntax errors just make sure you have flow installed (and if you're using VsCode add even the proper <a href="https://github.com/flowtype/flow-for-vscode">flow extension</a>).

### Basic folder structure

- <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Stores
   * <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Domain:
       stores the data which'll be needed in your app. (user data, for example todos array)
   * <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> View/UI:
       stores the data which'll be needed to present your app (loading, error variables..)
       if the state of the store is too simple there's no need of a specific component ui-store.

- <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Models: Here you can define the data models

- <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Services: Here you can make services like api calls, that will be used directly by the stores

- <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Components: Container or Smart Component, Dumb or presentational component

- <img src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" width="15" /> Style: any scss must be placed in the style folder and must have the prefix _ if is a partial file


### Debug
you can debug both the client and the server, there's already a custom vscode launch.json configuration, so you just need to run the debugger and you should be ready to go

- Client

<img src="https://i.imgur.com/Yz28YRS.gif" />

- Server

<img src="https://i.imgur.com/Bm39QxR.gif" />


### License
MIT License

Copyright (c) 2017 kinotto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
