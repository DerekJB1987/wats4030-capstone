# Seattle University Web Development Certificate WATS 4030 Capstone Project

> This project is a display of all of the web development skills I attained during the program from April 2018 to March 2019.

## Project Goals
This project is intended to create a featured item in my portfolio. Along with other projects to show the progression of my skills throughout the program.

I decided to use Vue.js app that was powered using data from a third party API. 

To be completed later.

## Basic Requirements
In order to successfully complete this project, we must fulfill the following
requirements. The requirements below are organized according to the file we will
modify to fulfill them.

* Come up with an idea for a web project that fits with your career goals and skill set.
* Express your plans to complete the project using wireframes, design comps, palettes, and other planning documents.
* Create a development environment suitable for working with your chosen technology.
* Use standards-compliant HTML, CSS and JavaScript.
* Provide a usable experience across modern web browsers (including the latest versions of Edge/IE, Chrome, Safari, Firefox) and mobile experiences (including iOS and Android browsers).
* Provide a usable experience for users who require assistive technologies.
* Implement at least one significant feature or layout powered by JavaScript.
* Implement at least one third party data API to receive data used in the project. (This can be a data API implemented or deployed by you, or something created by an external provider.)
* Create a user friendly information architecture that allows users to easily accomplish their goals within your project.
* Create an elegant and engaging visual design so users have a more enjoyable experience with your project.
* Implement a third party analytics solution so user behavior can be tracked and monitored.
* Deploy the project consistently to a publicly accessible server throughout the development process so your work can be reviewed on a regular basis.

## How to Use my Project

* To be finished at a later time
`<script>`

* Import axios for use in the component logic
* Create a method called `findWords` (don't neglect to add the `methods` attribute to this component)
* Within the `findWords` method, create an `axios.get()` statement that will make a request to `https://api.datamuse.com/words`
    * Define the `params` for `ml` (which should map to the `phrase`) and `rel_rhy` (which should map to the `rhyme`)
    * Define a `then` clause that sets the component's `results` value to the value of `response.data`
    * Define a `catch` clause that will add any error to the `errors` array in the component

**`/src/components/NewComponent.vue`**

(Please do not actually name the new component `NewComponent.vue`. This name is only being used for reference here. Name the component according to whatever feature it provides.)

* Create a new component (use the boilerplate component code, or copy the component you just created)
* Refer to the Datamuse API documentation to determine a way to modify your code to provide an alternative way to find words (e.g. "sounds like", "related to", "adjectives that go with a word", "words that often follow a word", etc.).
* Implement a similar interface to perform this new search
    * Create the necessary template to allow the user to enter at least one search parameter
    * Create the necessary method to handle the form submission and API request
* Implement the proper template elements to output the results to the user
    * Show all relevant results returned by the API
    * Show all errors to the user
    * Show a message when no results have been found, so the user knows the system is working even though the data is not there

**`/src/router/index.js`**

* Add the new component to the import statements in the router definitions file
* Add the new route to the router definitions list (use a sensible URL and name for it)

**both `/src/compnents/Rhymesaurus.vue` and `/src/components/NewComponent.vue`**

* Add navigation elements to provide links between the two search pages
* Use proper `router-link` tags to create links
* Allow the user to easily switch between the two pages in the application.

## Stretch Goals
If you are looking for additional challenges with this project, consider working
on the following goals.

* Create a similar application using a different API. ([Find suggested APIs for experimenting with here](https://suwebdev.github.io/WATS-4000-gitbook/appendices/appendix-b-api-suggestions.html))
* Add a second API to this application and mingle the results in some interesting way
* Use the "score" data from the API to modify the visual presentation of the words to indicate which ones are the best matches for the user's search parameters
* Use the data returned from the API to modify the appearance or interface in some other way

## Instructions for working with this application

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

```

**Note:** This application has been configured to build files to the `/docs` directory, making it compatible with the "Serve from `master` `/docs` directory" setting for GitHub Pages. Please adjust your GH Pages settings accordingly on your repository settings page.

For detailed explanation on how Vue works, check out the [guide](https://cli.vuejs.org/guide/) and [docs for vue-loader](https://cli.vuejs.org/config/#css-loaderoptions).

## Credits
This project makes use of the [Datamuse API](http://www.datamuse.com/api/), which is a wonderful, free API service that you should support.# wats4030-capstone
