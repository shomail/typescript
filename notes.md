Default behaviour of Typescript compiler is to only give warnings and eventhough there is error in code it will still compile it.

You can modify this behaviour in tsconfig file by first running tsc --init to create config file with default options. set noEmitOnError = true, tsc -w --p ./tsconfig.json

To maually combine ts files into single js, tsc --outFile namespace.js namespace.ts namespaceMath.ts
This is how we bundle namespace files together

Typescript has a different way to import namespaces and it's not like es6 modules import
Syntax for importing namespace is: /// <reference path="namespaceMath.ts" />
With this approach we still need to compile with --outFile flag

In large scale app namespaces are not manageable and has limitations like we don't know the dependecies of the modules, there is no structure we can import any namespace to any where as we want as long as they are in the right order.

Nampespaces organize application with JS objects, can be split up to multiple files and we do not need a module loader to use them. But dependencies get difficult to manage in bigger applications.

Modules helps us organize application with real es6 modules, split them up to multiple files but we need a module loader to load them in the browser, if we use commonjs comiple option then we don't need it in node js app. We have explicit dependency declaration and we know which module has what dependency.
