# Quad Racing Event Tracker

## Getting started

Verify required services are installed:
 - [Yarn](https://yarnpkg.com/en/docs/install) (this can also install Nodejs)
 - Nodejs
 - MongoDB
 - Redis
 - Git

Use Make commands to start server and open page:

```
make open
```

If there is an issue with bcrypt or node-gyp see: https://github.com/kelektiv/node.bcrypt.js

## Make commands

#### Install all modules

      $ make setup


#### Run the app with one process and without file change restarts

      $ make simple

#### Run the app with default settings and open browser to app url

      $ make open

#### Run the app with default number of processes (num cpu's in machine)

      $ make run

#### Run the app, limiting to a single process

      $ make run 1

#### Run the app and cycle on file changes

      $ make cycle

#### Run the app and cycle on file changes, limiting to a single process

      $ make cycle 1

#### Run the app with single process and node profiling

      $ make profile

#### Run the app with single process and node profiling using `prof_lazy` option

      $ make profile-lazy

#### Run the app with default settings with node debugging enabled (use node-inspector to view source and debug)

      $ make debug

#### Run the app with default settings with node debugging enabled and immediately break on first line

      $ make debug-brk


## Useful Links

- https://github.com/ImmersionRC/LapRFUtilities
