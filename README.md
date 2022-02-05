# PolyBlocks webpack boilerplate

This boilerplate helps artists to develop artwork. If you are looking for a simpler boilerplate, you can use the [plain boilerplate](https://github.com/polyblocksapp/boilerplate) instead.

## Dependencies

* [nodejs](https://nodejs.org/) must be installed beforehand.

## Installation

Clone this repository via
```sh
$ git clone https://github.com/polyblocksapp/boilerplate-webpack.git `polyblocks` && cd polyblocks
```

Install the dependencies via
```sh
$ yarn install
```

or

```sh
$ npm install
```

## Start development

```sh
$ yarn start
```

or

```sh
$ npm start
```

This will open [http://localhost:8080](http://localhost:8080) to see your project in the browser.

## Build

Once you finished your development, build your artwork via

```sh
$ yarn run build
```

or

```sh
$ npm run build
```

You will see `index.js` under `dist` folter. Copy the generated text and paste it in [the mint page](https://polyblocks.io/mint).


## How to mint

Read the [instruction](https://polyblocks.io/learn/guide) on PolyBlocks.

## Rules

* Any other libraries are not recommended to be imported.
* Any external resources such as images and videos under `public` will not be exported when building.
* If you want to use external resources (not recommended officially though), upload them on [Pinata](https://www.pinata.cloud/) and directly import them in your script file.
* PolyBlocks strongly recommends that all artists use `pb.random()`, `pb.randint(a, b)` or `pb.randrange(a, b)` to feed all of their project's randomness. If you want to know about these random functions, please read the [instruction](https://polyblocks.io/learn/guide#randomness).
