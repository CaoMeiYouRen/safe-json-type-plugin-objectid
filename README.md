<h1 align="center">safe-json-type-plugin-objectid </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D12-blue.svg" />
  <a href="https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CaoMeiYouRen/safe-json-type-plugin-objectid" />
  </a>
</p>


> safe-json-type插件，转换mongdb的ObjectId对象

### 🏠 [主页](https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid)

## 依赖要求

- node >=12 注：本项目在node12环境下开发完成，低版本兼容性请自行测试
- safe-json-type >=1.0.0
- safe-json-type-plugins >=1.0.0

## 安装

```sh
yarn install
```

## 使用

```js
import { SafeJsonPluginObjectId } from 'safe-json-type-plugin-objectid'
import { SafeJsonType } from 'safe-json-type'
SafeJsonType.use(new SafeJsonPluginObjectId())
```

## 测试

```sh
yarn run test
```

## 作者


👤 **CaoMeiYouRen**

* Website: https://blog.cmyr.ltd/
* GitHub: [@CaoMeiYouRen](https://github.com/CaoMeiYouRen)

## 🤝贡献

欢迎Contributions, issues and feature!<br />请查看 [issues page](https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid/issues). 您还可以查看[contributing guide](https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid/blob/master/CONTRIBUTING.md).

## 支持

如果觉得这个项目有用的话请给一颗⭐️，非常感谢

## 📝 License

Copyright © 2020 [CaoMeiYouRen](https://github.com/CaoMeiYouRen).<br />
This project is [MIT](https://github.com/CaoMeiYouRen/safe-json-type-plugin-objectid/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
