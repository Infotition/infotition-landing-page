# Infotition Collaborator Guide

## Code contributions

Please keep in mind that we use ESLint to enforce a consistent coding style, so having that set up in your editor of choice is a great boon to your development process. Also all javascript files should be written in TypeScript.

**Requirements for every code contribution**:
- All tests must pass.
- Follow the airbnb-base and eslint configuration in the project. Check the codestyle with `npm run lint`.
- If you fix a bug or added a feature, add a test.

## Branches

Use the `main` branch for bug fixed that is intended for the current realease.

For everything else (e.g. features) use the corresponding named branch or create a new one.

## Steps for contributing

To get ready to work on the codebase, please do the following:

1. [Create an issue](https://github.com/DevTobias/infotition-landing-page/issues) for the bug you want to fix or feature that you want to add.
2. Create your own [fork](https://github.com/DevTobias/infotition-landing-page/) on GitHub, then Checkout your fork.
3. Write your code in your local copy. It's good practice to create a branch for each new issue you work on, although not compulsory.
4. To run the test suite, first install the dependencies by running `npm install`, then run `npm test`.
5. If all tests passed, also check the coverage with `npm run coverage`. Try to get 100% coverage on all of your changes.
6. Ensure your code is linted by running `npm run lint`. Any issue will be listed and you must fix it.
7. If all tests passed, coverage is (near) 100% and all files are linted, you can commit your changes to your fork and then create a pull request from there. Make sure to reference your issue from the pull request comments by including the issue number.

