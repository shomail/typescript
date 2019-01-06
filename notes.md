Default behaviour of Typescript compiler is to only give warnings and eventhough there is error in code it will still compile it.

You can modify this behaviour in tsconfig file by first running tsc --init to create config file with default options. set noEmitOnError = true, tsc -w --p ./tsconfig.json

To maually combine ts files into single js, tsc --outFile namespace.js namespace.ts namespaceMath.ts
This is how we bundle namespace files together

Typescript has a different way to import namespaces and it's not like es6 modules import
Syntax for importing namespace is: /// <reference path="namespaceMath.ts" />
With this approach we still need to compile with --outFile flag

In large scale app namespaces are not manageable and has limitations like we don't know the dependecies of the modules, there is no structure we can import any namespace to any where as we want as long as they are in the right order.
