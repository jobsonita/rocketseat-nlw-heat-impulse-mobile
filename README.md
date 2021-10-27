![License](https://img.shields.io/github/license/jobsonita/rocketseat-nlw-heat-impulse-mobile?color=blue)
![Node version](https://img.shields.io/badge/node-v14.18.0-brightgreen)
![Yarn version](https://img.shields.io/badge/yarn-v1.22.15-brightgreen)
![Expo version](https://img.shields.io/badge/expo-~43.0.0-brightgreen)
![React version](https://img.shields.io/badge/react-^17.0.1-blue)
![React version](https://img.shields.io/badge/react--native-0.64.2-blue)
![Typescript version](https://img.shields.io/badge/typescript-^4.3.5-lightgrey)
![Moti version](https://img.shields.io/badge/moti-^0.16.0-blue)

# :rocket::seat: NLW-Heat - Impulse Track - React Native Frontend :iphone:

[NLW-Heat](https://nextlevelweek.com/inscricao/7) frontend project with React Native, Expo, Moti, Github OAuth and JWT

## :hammer: Status

> :white_check_mark: Finished :lock:

## :bookmark: Content Table
<!--ts-->
  * [App Interface](#newspaper-app-interface)
  * [Technologies](#books-technologies)
  * [Install and Run](#calling-installing-and-running-this-project)
  * [Author and License](#memo-author-and-license)
<!--te-->

## :newspaper: App Interface
### :iphone: Planned Design

<p align="center"><img alt="Planned design for the app" title="NLW-Heat Impulse Planned Design" src="./.github/planned_design.gif"/></p>

Based on [Rocketseat's NLW-Heat design](https://www.figma.com/community/file/1031699316177416916). You might need a [Figma](https://figma.com) account to access the design.

### :tada: Final Result

<p align="center"><img alt="Final design for the app" title="NLW-Heat Impulse Final Design" src="./.github/final_design.gif" width="250px"/></p>

## :books: Technologies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Moti](https://moti.fyi/)
- [Github OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Axios](https://axios-http.com/)
- [Websockets](https://socket.io/)

## :calling: Installing and running this project

### :wrench: Prerequisites

Before starting, make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed. Also, install [Expo Go](https://expo.dev/client) on your phone (or install an [Android emulator](https://developer.android.com/studio/) following [these instructions](https://react-native.rocketseat.dev/android/emulador/)) and create an Expo account.

This project is intended for use alongside the backend server available at https://github.com/jobsonita/rocketseat-nlw-heat-impulse-node. Please, follow the instructions there first and then proceed with the instructions below.

### :inbox_tray: Install and run

Clone the project using Git, install its dependencies through Yarn and run the project:

```bash
git clone https://github.com/jobsonita/rocketseat-nlw-heat-impulse-mobile.git

# wait for git to finish clonning the project, then navigate to the folder and install the dependencies:

cd rocketseat-nlw-heat-impulse-web

expo

# Finally, run the app:

expo start

# Expo will open a browser page with options to connect to an emulator or to your phone (through a QR code)
```

### :mag: Testing

With the app running, read the QR generated code on your phone.

> **Notice:** in order for GitHub OAuth authentication to work properly, you need to configure your [GitHub OAuth](https://github.com/settings/developers) app's homepage URL and authorization callback URL to `https://auth.expo.io/@<username>/rocketseat-nlw-heat-impulse-mobile`, where `<username>` is your username in Expo (you need to create an Expo account). And remember to configure the [backend](https://github.com/jobsonita/rocketseat-nlw-heat-impulse-node) appropriately (update the `GITHUB_ID` and `GITHUB_SECRET`) in case you're creating a new app on GitHub OAuth.

## :memo: Author and License

[![Author: jobsonita](https://avatars.githubusercontent.com/u/1463583?s=48&v=4)](https://github.com/jobsonita/jobsonita) | [Jobson Gilberto](https://github.com/jobsonita/jobsonita)
-|-

[![License](https://img.shields.io/github/license/jobsonita/rocketseat-nlw-heat-impulse-mobile)](LICENSE)
