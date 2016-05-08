# TypeScript Sample: Greeter 

## Overview 

This sample shows the basics of using Typescript *and* javascript together.
It also shows the power of using visual studio code for intellisense between the
two languages. In addition gulp is used for traspilation and source map creating.
Debugging works seamlessly between the 


## Running
Command Line: 
```
gulp start

```
Visual Studio Code:
```
Run build task: ctrl+shit+b
```

## Notes
`gulp-sourcemaps` has a bug with typescript-like source maps. There is a fix but it has not been committed but is without 
a version number (still in master).  Hence the reliance on a specific commit of `gulp-sourcemaps`.
