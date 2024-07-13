# State: Redux Store

## My Project

I am to refactor an e-commerce platform so that it uses [Redux](https://redux.js.org/).

## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```

## Mock-Up

This section reviews the web application's general appearance and functionality. This is what it is supposed to look like once it is refactored and done. This is the goal. 

The following animation shows how a user can register using the Signup page and then navigate to the Products page:

![A user registers on the Signup page and then navigates to the Products page, which displays images and descriptions of products.](./Assets/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:

![The user selects a category, chooses a product, views details about it on the product page, and adds it to and removes it from their shopping cart.](./Assets/22-state-homework-demo-02.gif)

Finally, the user can check out by going to their shopping cart, as shown in the following animation:

![The user checks out by going to their shopping cart.](./Assets/22-state-homework-demo-03.gif)

## Getting Started

For instructions to add Redux to your application, refer to the [Redux Fundamentals basic tutorial](https://redux.js.org/basics/basic-tutorial). Note that the documentation will refer to additional packages that you'll need to complete this implementation.

Be sure to review ALL of the documentation, because there are newer methods that can make these tools much easier to implement. React has gone through several iterations; as such, some React-and-Redux tutorials will assume that you aren't using Hooks.

You'll use the Stripe API to process payments, which includes making front-end and back-end changes. Don't worry, Stripe provides test credentials, so you won't need to use a real credit card to try it out. Refer to the [Stripe docs on testing your integration](https://stripe.com/docs/testing).

**Important**: The Challenge requires a specific version `(>=7.0)` of `npm` in order to install peer dependencies like GraphQL when deploying to Heroku. By default, Heroku uses `npm 6.x`, which may cause some issues. Be sure to refer to the [Heroku Docs on Specifying an NPM Version](https://devcenter.heroku.com/articles/nodejs-support#specifying-an-npm-version) to ensure your `package.json` file is set up correctly, as shown in the following snippet:

  ```json
  {
    "engines": {
      "npm": "7.x"
    }
  }
  ```

## Notes

Behind on other projects. Just started this one and it's due Nov 8. Will look at it again sometime after November 15 when I have more time and I'm in no pressure to complete assignments by Nov 15 and when I don't have a 3rd and final project to focus on. I have refactored to the best of my knowledge but I am encountering errors and I need to fix them. Stay tuned! 

## Usage

The following images show the CURRENT web application's appearance and functionality. Keep in mind this is a work in progress, it is NOT complete yet (see Notes above).

![One of the errors](./Assets/home.png) 

## Installation

```npm install```

```npm run develop```

## Links

[Repository](https://github.com/Gera1313/22-redux-store)

[Deployed Link](Insert here when available)

[Getting Started With Redux](https://redux.js.org/introduction/getting-started)

## Credits

Big help thanks to the module activities. Watched the Zoom recordings. Will continue with this project at a later time when I'm not pressed with time (see Notes section above). Tutor Jere Wongani. 

## Licenses

## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

