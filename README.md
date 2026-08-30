# RPG Character Builder Starter

This is the minimal starter project for the cumulative WEB 425 RPG Character
Builder labs. It provides the supported Angular environment, routing,
Jasmine/Karma testing, and an empty root component. It does not contain any
weekly RPG features or assignment solutions.

## Prepare the project

From the project root, run:

```bash
nvm use
npm install
```

The `.nvmrc` file selects the Node.js version supported by this course. Use the
versions defined by the starter rather than generating a replacement project
with a different Angular CLI.

## Run and verify

```bash
npm start
npm test -- --watch=false
npm run build
```

The unmodified starter displays an empty routed application and contains one
unit test that verifies the root component can be created.

## Styling choice

WEB 425 evaluates Angular development rather than visual design. The starter
loads the course-provided W4 stylesheet so students can build a responsive
interface without writing a styling system.

Students may instead write their own CSS or use a third-party styling library.
Students who choose another styling approach are responsible for installing,
configuring, and troubleshooting it. Styling problems do not change the Angular
requirements, required behavior, accessibility expectations, responsive
behavior, or unit-test contracts of an assignment.

Do not make behavioral tests depend on framework-specific visual classes unless
a class is explicitly part of the assignment contract.
