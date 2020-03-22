## GitHub API webapp! 💥

This small webapp fetches the most starred Github repositories relatively created within the last 30 days. This project is brought to you by React. The main features of this project include GitHub API data fetch using the isomorphic fetch library and infinite scroll. (find more details about the libraries in the bottom of the page). The project's design follows a clean, responsive, and minimalistic layout.

You can run this project locally by doing the following:

### 1. Clone or download the project

Here are instructions to help you get started [Cloning a GitHub Repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


### 2. Once downloaded, make sure to install all of the project's dependencies by running:

#### `npm i`

Note: You may also use yarn if you prefer.

### 3. Now that your dependencies are all set, you can launch the project by running: 

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />

#### `npm build`

Builds the app for production to the `build` folder.<br />

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### 4. Your project should now be running in your localhost!


### Complete Library List

- React.js
- isomorphic-fetch
- moment.js
- shards-react
- bootstrap

Initially, I was going to use a simple AJAX API call, but then I got stuck with pagination. I contemplated using axios, but I was only using the GET command and it didn't solve my pagination issue so after a bit of research, I stumbled upon isomorphic fetch. It's a library that helps use the fetch command globally (between the client and server) and was able to understand the handle scroll method as the page "next-ed" each time. Overall, I found this library to be an easier resource to implement for both performing the api request and implementing the infinite scroll feature.

Moment.js is known as the Swiss Army knife for working with dates in JavaScript. I used it in the two util functions to return an appropriate & corresponding value to 1). the url being fetched and 2). the "Submitted _ days ago" view section. Using moment helped make the util functions a lot easier to write.

Shards UI & Bootstrap were both used for this project's design. I have a preference towards modern, minimalistic styling and these libraries seemed like a good fit for this project.

I used React because I want to improve my React skills and let's face it, it's better than Angular.

If this project were to scale/features to add:
    1. Replace UNSAFE_componentWillMount with ComponentDidMount in RepoList.jsx file. Or find a work-around.
    3. Perform TDD