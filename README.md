# Decisions

1. I've decided to use create react app with typescript. It's easy to set up and I've used it before so I'm comfortable with it. The readme for create react app is still found below.
2. Styled components for css management, no real reason other than that's what I'm using now at my current job.
3. React select for select component, because you guys said I could use a component here and the time to make the HTML select styled like what's in figma is longer than I'd want to spend on it.
4. I'm not 100% sure if this is what I'm supposed to do, as there were not any instructions on this part, but I'm going to calculate the ideal retirement age
   a. First, figure out their target income and current age
   b. Second, make sure they are not already at point where they could retire and hit their target income(make this check a funciton so you can use it again)
   b-1. I am subtracting 18,000 for social security payment here(from target income), this is probably my biggest question mark on the assignment. Not sure how I would figure that out. Only subtracting when they are of an age where they can actually get social security.
   b-2. Also, google is telling me it depends on when you were born on when you can take social security at max benefit, but it's only a year difference(66 to 67 going up by a few months each tier), I'm just using 67 for simplicity. I don't think that extra 18,000 is going to matter too much since it won't ever gain interest and it's max 1 year of extra income. Obviously an improvement on my code would be to set this up from the table I found online but that'll take extra time and trying to adhear to the 3 hour time limit I don't think that's worth it right now.
   c. Third, calculate how much they are saving per year, add that to their savings, then add in the interest rate
   c-1. I know just using the interest rate at the end is not technically how it works real world(you would be saving so much per month), but for simplicity sake I will do that here.
   d. Fourth, use this new saving amount found in c and re-use the function in b to figure out if they could retire at that age.
   d-1. My initial thought was to figure out how much money they needed to retire but that number moves based on the age, so looping is better in this case I believe.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
