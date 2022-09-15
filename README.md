
# Cancellation-Survey & Add-Product

## Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v14.20.0

    $ npm --version
    v8.18.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs


## Install

    $ npm install


## Start & watch

    $ npm start

## Webpack build

    $ npm run build

## Run webpack build

    $ npm run serve

## Languages & tools

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [eslint](https://eslint.org/) for better code quality.
- [prettier](https://prettier.io/) for maintaining code quality in project.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) for testing React applications.

### CSS
- [SCSS](https://sass-lang.com/) is used to write futureproof CSS in nested form.

## Notes
- Implemented a survey to cancel membership.
- Implemented a form to add product.
- Added ESLint for consistency and better code quality.
- Added Basic Test Cases for components.

## Future Work
- We can add detailed test cases.
