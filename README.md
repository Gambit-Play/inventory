# Food Management App

An app that helps restaurant/fast food owners manage their business easier by automating certain processes.

You can take orders with it and it will keep the inventory up to date when that order has been finished. No more paper tickets which increase the chances of making mistakes. Also, it helps you spend less time doing the administration and focus more on your business.

## Build with:

-   <ins>React</ins>
-   React-Router-Dom: for routing
-   Redux: for state management
-   Redux-Saga: for handling async/side-effect call and for components handlers and logic
-   Firebase: for the database (NoSQL)
-   Lodash: for handling data
-   Material-UI: for user interface
-   Styled Components: for user interface and Sass/CSS

## Why I started this project:

My previous project was e-commerce. It was on that project where I was learning React and all other new technologies and concepts. There were certain concepts and libraries that I wanted to learn and experiment more with. These were Redux, Redux-Saga, Firebase, and Styled Components.

But also creating a CRUD app with authentication from scratch with React on your own, without no one to help you, but the internet, was a very interesting task to take on.

Trying to solve errors that you have never seen before helped me the most, to understand React and other libraries better.

## How I have implemented the libraries:

One of the interesting parts of this project was experimenting with Redux-Saga by changing and moving all the logic and handlers of a component to Redux-Saga. Which in turn makes my React components cleaner.

Most of my components are just dispatching redux action and providing values if necessary or consuming part of the state from Redux.

If you are interested in seeing some examples of it and how I have implemented other libraries too? Then click [here](./src/documentation/README_IMPLEMENTATION.md).
