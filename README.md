# pipenull
Yeeeh, you can pipe nothing because you don't want use any [WriteableStream](https://nodejs.org/api/stream.html#stream_writable_streams) !!  

## Install
Install it with npm or yarn.

```
With npm:
$ npm i pipenull
```

or

```
With yarn:
$ yarn add pipenull
```

## How to use ?
Easy peasy !! like this one:

```typescript
// Javascript
const pipenull = require("pipenull");
// Typescript
import pipenull from "pipenull";
...
.pipe(pipenull)
.on('end', ()=> {
    ....
});
```