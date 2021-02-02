[![Actions Status](https://github.com/vetneka/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/vetneka/frontend-project-lvl1/actions)
[![ESLint Status](https://github.com/vetneka/frontend-project-lvl1/workflows/eslint/badge.svg)](https://github.com/vetneka/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e461748e1be511ee81df/maintainability)](https://codeclimate.com/github/vetneka/frontend-project-lvl1/maintainability)

# Learning project - Brain games 

This is the first training project as part of the Hexlet course in the frontend developer profession. The project consists of five console games written in Javascript.

| Game                | Description                                     | Asciinema                                |
|:-------------       |-------------------------------------------------|:----------------------------------------:|
| `Brain-even`        | You need to answer a number is even or not      | [link](https://asciinema.org/a/383861)   |
| `Brain-calc`        | Сalculate a mathematical expression             | [link](https://asciinema.org/a/384046)   |
| `Brain-gcd`         | Find the greatest common divisor of the numbers | [link](https://asciinema.org/a/384077)   |
| `Brain-progression` | Find the missing number of the progression      | [link](https://asciinema.org/a/384143)   |
| `Brain-prime`       | You need to answer a number is prime or not     | [link](https://asciinema.org/a/384212)   |

# Use online

[# Demo on repl.it](https://repl.it/@vetneka/frontend-project-lvl1)

1) Press green button "Run =>"
2) You can play in default game (brain-calc)
3) After game you can select new game:

```
// template: make brain-{even/prime/gcd/calc/progression}

$ make brain-even
```

# Use local

## Install
```
$ npm install
$ npm link
```

## Run game
```
// template: brain-{even/prime/gcd/calc/progression}

$ brain-even
```

## Uninstall
```
$ npm unlink
$ rm -r frontend-project-lvl1
```