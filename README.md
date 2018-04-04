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

## Libraries used

### [Stylus](http://stylus-lang.com/) for CSS preprocessing

Includes [Nib](http://stylus.github.io/nib/)

- Optional colons
- Optional semi-colons
- Optional commas
- Optional braces
- Variables
- Interpolation
- Mixins
- Arithmetic
- Type coercion
- Dynamic importing
- Conditionals
- Iteration
- Nested selectors
- Parent referencing
- Variable function calls
- Lexical scoping
- Built-in functions (over 60)
- In-language functions
- Optional compression
- Optional image inlining
- Stylus executable
- Robust error reporting
- Single-line and multi-line comments
- CSS literal for those tricky times
- Character escaping
- TextMate bundle
- and more!

### [Pug](https://pugjs.org/api/getting-started.html) for HTML preprocessing

- [Attributes](https://pugjs.org/language/attributes.html)
- [Case](https://pugjs.org/language/case.html)
- [Code](https://pugjs.org/language/code.html)
- [Comments](https://pugjs.org/language/comments.html)
- [Conditionals](https://pugjs.org/language/conditionals.html)
- [Doctype](https://pugjs.org/language/doctype.html)
- [Filters](https://pugjs.org/language/filters.html)
- [Includes](https://pugjs.org/language/includes.html)
- [Inheritance: Extends and Block](https://pugjs.org/language/inheritance.html)
- [Interpolation](https://pugjs.org/language/interpolation.html)
- [Iteration](https://pugjs.org/language/iteration.html)
- [Mixins](https://pugjs.org/language/mixins.html)
- [Plain Text](https://pugjs.org/language/plain-text.html)
- [Tags](https://pugjs.org/language/tags.html)


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
