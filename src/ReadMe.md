# Khichdi - Backend API Layer

[![Build Status](to be updated)]

## Overview

This project is the Backend API layer for Khichdi.
The first commit here is starter template for Khichdi API - Node Js TypeScript application.
The aim of the template is to help guide a common approach, making it easier to get building quicker and to ensure that each app meets the required standards.
####Key Technology used:

1. Node Js - Backend Server
2. Typescript - Application programming Language.
3. Jest - Unit Testing.
4. TypeDoc - API Documentation
5. Eslint - For Linting
6. Husky - Validating pre commit hooks

## Getting Started

> **Check for any new security vulnerabilities**
>
> ```
> npm audit --registry=https://registry.npmjs.org/
> ```
>
> For issues cause by outdated packages run `npm audit fix` to resolve the issues.
>
> To ensure that the template stays up to date please submit `Pull` requests when security issue are found.

## Debugging

Press `F5` to start debugging the function. To debug failing test use the `Jest` VSCode extension.

## Tests

It is important to have unit tests for your app.

> Aim is to have a code coverage of at least **80%**.

Run the command `npm run test` to start the test runner. This will monitor file changes and automatically run the tests as you dev.

Alternatively the following command `npm run test:ci` will run the tests and generate coverage reports in the `/test` folder.

If you have installed the [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters) extension, select the `Watch` button in the status bar to display coverage in the editor.

## `Shared` Folder

The following structure is used:

- Shared
  - Dal - Data Access Layer. Create `Repository` classes for accessing the Database.
  - Dtos - Data Transfer Objects - Define TypeScript Types that are used for the API requests and responses.
  - Helpers - Shared `Helper` functions.
  - Models - Define TypeScript Types for the Data Models
  - Service - Create `Service` classes that abstact business logic away from the functions.

### Key Website helps:

1. Setting Up Husk for Git Hooks: https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/
2. Setting Up TypeScript for Node: // https://khalilstemmler.com/blogs/typescript/node-starter-project/
3. Setting up VScode Jest pluggin: https://dev.to/muhajirdev/unit-testing-with-typescript-and-jest-2gln
4. Setting Up Jest for Node Js (Type Script): https://www.darraghoriordan.com/2019/10/22/configuring-jest-for-typescript-node-app/
5. Setting up Jest - https://medium.com/@admin_86118/testing-typescript-node-with-jest-6bf5db18119c
6. Setting Up type/Jest - https://basarat.gitbook.io/typescript/intro-1/jest
