# 游密在线教育Demo (Native SDK版)

## 支持语音视频通话、实时互动白板功能

[![React](/internals/img/react-padded-90.png)](https://facebook.github.io/react/)
[![Webpack](/internals/img/webpack-padded-90.png)](https://webpack.github.io/)
[![Redux](/internals/img/redux-padded-90.png)](http://redux.js.org/)
[![React Router](/internals/img/react-router-padded-90.png)](https://github.com/ReactTraining/react-router)
[![Flow](/internals/img/flow-padded-90.png)](https://flowtype.org/)
[![ESLint](/internals/img/eslint-padded-90.png)](http://eslint.org/)
[![Jest](/internals/img/jest-padded-90.png)](https://facebook.github.io/jest/)

游密 [Electron](http://electron.atom.io/) 版在线教育Demo， 基于[electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

## Screenshot

- 创建或加入课堂

![Youme education demo login](./screenshots/screen1.png)

- 设备检测

![Youme education demo device check](./screenshots/screen2.png)

- 课堂

![Youme education demo class room](./screenshots/screen3.png)

## Install

- **Note: requires a node version >= 7 and an npm version >= 4.**
- **If you have installation or compilation issues with this project, please see [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate/issues/400)**

First, clone the repo;

And then install dependencies with npm.

```bash
 git checkout youme-metting
 npm install
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
  npm run dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
  npm run start-renderer-dev
  npm run start-main-dev
```

## Packaging

To package apps for the local platform:

```bash
  npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
  npm run package-all
```

To package apps with options:

```bash
  npm run package -- --[option]
```

To run End-to-End Test

```bash
  npm run build
  npm run test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

- mac or linux

```bash
DEBUG_PROD=true npm run package
```

- windows

```bash
SET DEBUG_PROD=true npm run package
```

## License

MIT

## Contacts

- [游密科技](https://youme.im)
