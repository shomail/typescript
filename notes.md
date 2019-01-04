Default behaviour of Typescript compiler is to only give warnings and eventhough there is error in code it will still compile it.

You can modify this behaviour in tsconfig file by first running tsc --init to create config file with default options. set noEmitOnError = true,  tsc -w --p ./tsconfig.json
