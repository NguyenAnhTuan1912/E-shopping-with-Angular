# E-shopping - Online shopping app ![](https://img.shields.io/static/v1?label=Build&message=v2.0&color=green)

I make this app to learn about Angular project structure. This app isn't referred by others.

Live demo [here](https://angular-ivy-r3scwy.stackblitz.io)

## Table of contents
* [Technologies](#technologies)
* [Install](#install)
* [Project Structure](#project-structure)
* [Version](#version-)

## Technologies
Project is createed with
* Angular v14.0.0
* RxJS v7.3.5

## Install
It's very easy to install

First, you should install all project's dependencies
```
$ cd ../your-project-directory
$ npm install
```

And run
```
$ ng start
```

## Project Structure

In common, I make a new project and work on it with all code in one folder like this

```bash
Project directory
.
├── src
│   ├── app
│   │   ├── components
│   │   │   └── product
│   │   ├── models
│   │   │   └── ProductModel.ts
│   │   ├── services
│   │   │   └── user.service.ts
│   │   ├── pipes
│   │   │   └── example.pipe.ts
│   │   ├── directives
│   │   │   └── example.directive.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app-rounting.module.ts
│   │   └── app.module.ts
│   │
│   ├── index.html
│   ├── style.html
│   └── ...
│
├── tsconfig.json
├── package.json
├── angualr.json
└── README.md
```

This structure is subtable for small project, fast develop. but in long-term, it's not if the project is grow bigger. In this online shopping project, I apply new structure that I think will easy to develop and maintain after. I don't know what is the real-world project like, but I should learn and practice in this structure to learn more.

```bash
Project directory
.
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── guards
│   │   │   ├── service
│   │   │   ├── utils
│   │   │   └── core.module.ts
│   │   │
│   │   ├── features
│   │   │   └── product
│   │   │       ├── components (private for this feature)
│   │   │       ├── directives (private for this feature)
│   │   │       ├── pipes (private for this feature)
│   │   │       ├── services (private for this feature)
│   │   │       ├── product-routing.module.ts
│   │   │       └── product.module.ts
│   │   │
│   │   ├── shared
│   │   │   ├── components
│   │   │   ├── pipes
│   │   │   ├── directives
│   │   │   ├── models
│   │   │   ├── utils
│   │   │   └── share.module.ts
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app-rounting.module.ts
│   │   └── app.module.ts
│   │
│   ├── index.html
│   ├── style.html
│   └── ...
│
├── tsconfig.json
├── package.json
├── angualr.json
└── README.md
```

I must obey single responsibility principle to develop this app. The old `Product component` is turned into `Product module` (feature module) make `Product module` is more private. With this structure, I'm more focused on developing new "feature". Yeah, It's sound good and better than the old one. That's all, thank for reading.

## Version ![](https://img.shields.io/static/v1?label=Current%20Version&message=v2.0&color=green)

Current version description: Add search bar, search result page, search fearture.

Details
* ![](https://img.shields.io/static/v1?label=Version&message=0&color=green)
  * Create app.
  * Add some modules (`shared`, `features`, `core`, app-routing...)
* ![](https://img.shields.io/static/v1?label=Version&message=0.1&color=green)
  * Create some new public (shared) components.
  * Build the web structure.
* ![](https://img.shields.io/static/v1?label=Version&message=0.5&color=green)
  * New logics.
  * New pipes.
  * Products view (table, list) and can view product by category.
* ![](https://img.shields.io/static/v1?label=Version&message=1.0&color=green)
  * Add search bar, search result page in `shared`.
  * Add search feature.
* ![](https://img.shields.io/static/v1?label=Version&message=2.0&color=green)
  * New features added!
  * New Logic.
  * New feature module "identity" (login, register, reset-password, forgot-password).
  * New guard, services, models.
  * Update shared module

The project will be updated.
