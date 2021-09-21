# Express Project - Good Clips

## Starter
    In the root directory of GoodClips, run npm start to spin up application.  Application can be accessed via localhost:8080.

## Front End
    The front end is built using JavaScript event listeners for responsive web design.  I am also using the html templating engine, Pug, to render elements with user specific info.  When the back end route gets hit, the route runs and renders values to Pug which displays those values.

## Back End
    The back end is built using Express.js.  The routes directory holds all the route paths for each feature.  In the root level of the GoodClips directory, the app.js file hold the Express app aliased as app and directs each request to the correct route.
