# antd-admin-cli
[![NPM version](https://img.shields.io/npm/v/antd-admin-cli.svg?style=flat)](https://npmjs.org/package/antd-admin-cli)
[![NPM downloads](http://img.shields.io/npm/dm/antd-admin-cli.svg?style=flat)](https://npmjs.org/package/antd-admin-cli)

The antd admin command line utility.

## Getting Started

Install, create and start.

```bash
# Install
$ yarn add antd-admin-cli -g

# Create app
$ atda new myapp

# Start app
$ cd myapp
$ yarn start
```

## Commands

We have 3 commands: `new`, `init` and `generate`(alias `g`).

### atda new <appName> [options]

Create app with new directory.

#### Usage Examples

```bash
$ atda new myapp
$ atda new myapp --no-install
```

#### options

* `--no-install` -- Disable npm install after files created

### atda init [options]

Create app in current directory. It's options is the same as `atda new`.

### atda generate <type> <name> (short-cut alias: "g")

Generate route, model and component.

#### Usage Examples

```bash
$ atda g route product-list
$ atda g model products
$ atda g component Editor
$ atda g component Users/UserModal
$ atda g component Header --no-css
```

## Generated File Tree

```bash
.
├── public
    ├── index.html         # HTML for entry file
├── src                    # Source directory
    ├── assets             # Store images, icons, ...
    ├── components         # UI components
    ├── index.js           # Enry file
    ├── router.js          # Router configuration
    ├── models             # Dva models
    ├── routes             # Route components
    ├── services           # Used for communicate with server
    └── utils              # Utils
        └── request.js     # A util wrapped dva/fetch
├── .editorconfig          #
├── .eslintrc              # Eslint config
├── .gitignore             #
├── .roadhogrc             # Roadhog config
└── package.json           #
```

## Configuration

antd-admin-cli use [roadhog](https://github.com/sorrycc/roadhog) for build and server, view [roadhog#Configuration](https://github.com/sorrycc/roadhog/blob/master/README_en-us.md#configuration) ([中文版](https://github.com/sorrycc/roadhog#配置)) for details.

## License

[MIT](https://tldrlegal.com/license/mit-license)
