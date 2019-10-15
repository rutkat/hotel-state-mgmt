## Hotel State Management using React Hooks Demo
This project was bootstrapped with [NextJS](https://github.com/zeit/next.js/).

![Hotel Room Options](room-states.gif "Hotel Room Options")

## Developer Notes
1. NextJS was chosen to build a single-page javascript app with server-side rendering. As per request.
2. Initial room data is provided for props from the room_data.js file.
3. Components contain their corresponding styles in separate scss files with the help of the @zeit/next-sass plugin.
4. State management of the user inputs is handled by React's hooks using useState() and useEffects() methods.
5. WAI-ARIA adherence is done using semantic html tags and corresponding for/id attributes for user inputs.
6. No visual feedback is provided upon form submission as it was not in the requirements, however a page refresh will load data from localStorage if it exists.
7. Note that additional config parameters were added to enable jest/enzyme testing. See `jest.config.js` and `jest.setup.js`.


## Available Scripts
Install dependencies using `npm install`.

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Runs unit tests (verbose output) build with Jest and Enzyme.
