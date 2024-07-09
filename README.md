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
5. For part 2, I just am displaying name and income, because that's what we are filtering by, it would be easy enough to add more info here though

# General Info

Okay, I'll be honest, I spent probably closer to 3.5-4 hours on this. I spent about 3 hours on part 1 and then just threw part 2 together really quick. I'll go over what I'd do better next but lots of what I didn't do was just because of time contraints. Also, I had some questions during development that in normal work cercumstances I'd ask questions on, but because I did this over the 4th holiday break, I just kind of went with my gut. I'm more than happy to discuss what decisions I did make above(and any I missed writing down).

# What I'd do better

All of the things I'd do if I had more time.

1. Tests, tests, tests. I had submitting without unit tests but I just didn't have time. I think that's probably my biggest improvement to this.
2. I mentioned above, but I had some questions on how to implement things in part 1 that I just didn't ask. Again, normally I'd ask, but I did it over the 4th break so I decided to just go for it instead of waiting to ask when people were not on holiday/enjoying the weekend.
3. I realize my calculations on part 1 are probably a little off. I would have liked to test that a little more thourghly and make changes as needed.
4. A lot of the calculations in part 1 are just done in the component, they probably should be in a place like a util file where we could re-use them in other spots.
5. In part 2, the sorting/filtering would be best used in something like graphQL resolvers, or at the very least in a util like #4.
6. Loading states, would be nice to have some sort of spinner/loader.
7. In part 1, if you go above the life expectancy age you will get weird values.
8. In part 1 again, I didn't account for the fact that you would still be getting interest after retirement.
9. In part 1 part 3, I don't have the ability to add multiple people to the household.
10. I think part 1 is just generally buggy and you could do a lot more work to make that WAY more useful.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
