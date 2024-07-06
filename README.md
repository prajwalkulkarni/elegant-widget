# Elegant Widget - Visualize fare amount by payment type

It is important for vendors to accept payments in different ways in order to maximize business revenue by increasing the trip count & therby increasing yield amount.
This widget visualizes the total fare amount paid to the vendors by different payment types.

# Table Of Contents

1. [Why is this visualization important](#visualization_importance)
2. [Filter Options and its uses](#filter_options)
   1. [Share widget with applied filters](#filter_options_share)
3. [Tech choices and Installation](#tech_choices)

## Why is this visualization important? <a name="visualization_importance"></a>

When catering to a diverse set of passengers, ranging from different age groups to different regions, understanding the amount paid using different payment methods helps in analysing the consumer behavior and helps the vendors to setup the right ways to accept payments.

<b>Example scenario</b>: Jordy is a local taxi driver in Georgia who wants to expand his taxi business across larger part of the country. However, he is not aware of the different payment modes he needs to setup in order to satisfy a large number of passengers.
In this situation, he can use the elegant-widget to understand the payment pattern based on the payment type and setup only those payment types where the transaction amounts are high, because a high total amount collected through a particular payment type would likely mean that a large number of passengers prefer to pay using the said mode.

## Fiter options and its uses <a name="filter_options"></a>

This widget comes with a date range filter that can be applied to analyse the payment patterns across different date ranges. This can be used to understand the preferences of payment mode across different times. E.g: Between `01-01-2017` and `14-01-2017`, mode `p3` was the most preferred, whereas between the dates `15-01-2017` and `30-01-2017`, highest transaction amount was done through mode `p2`. Comparing this to the all time data, it is evident that payment modes `p2` and `p3` are the most used.
Several conclusions can be drawn from this, for instance, vaguely speaking, passengers prefer to pay using `p2` but there might be limitations on the number of transactions that the payment method can handle, hence passengers switch to `p3` when the limitation exceeds on `p2`, or, `p2` was a single player in the payment transfer provider, but `p2` is a new player that provides more features and better user experience thereby gaining a significant market share.

### Share widget with applied filters <a name="filter_options_share"></a>

It is also possible to share the widget to anyone with the filters applied. The applied filters are added as query parameters to the URI, and sharing this link would enable others to see the visualized data with the filters applied. To share the widget with applied filters:

- Set the start date and end date fields as required.
- Click on the "Apply Filters" button.
- You can now see the data with the filters applied. Click on the share icon present next to the "Apply filters" button, this copies the widget link with the filters applied. Send the link to anyone and they'll be able to see the filtered data.
- When filters are applied, the data in the summary cards also correspond to the filtered data.

## Tech choices <a name="tech_choices"></a>

### Project Envrionment & Setup:

I scaffolded the application using `npx vite`, which sets up a boilerplate code serving as a good starting point. With improved bundling speeds and HMR, the developer experience is significantly better.
There are 2 ways to view the implementation:

1.  Run the project locally:

- To run the project locally, clone the repository to your local machine by running `git clone https://github.com/prajwalkulkarni/elegant-widget.git`, followed by `yarn install`
- Run `yarn run dev` to run the application in development mode.

2.  View the deployed site

- Navigate to [https://elegant-widget.netlify.app/?start_date=2017-01-04&end_date=2017-01-16](https://elegant-widget.netlify.app/?start_date=2017-01-04&end_date=2017-01-16) to view the hosted application.

### Language:

For type safety and easier debugging, I’ve used TypeScript.

### Styling:

I’ve used semantic HTML in combination with vanilla CSS for styling. Since the functionality for almost all the components was straightforward, I didn’t need to use any sophisticated UI libraries to create and manage UI components. In addition, using vanilla CSS also helped me keep the application lean without using external dependencies.

### API layer:

I’ve written a custom hook with fetch API to perform the network calls. Since the scope of network calls were defined and limited, I didn’t want to overkill the application using a third-party state management library for fetching data. But, if I were writing this application for a production environment with real users, I would have opted to use `react-query` or similar libraries.

### Project structuring

I've followed a standard directory structure by clustering components & utilities based on their functionalities.
UI components are placed under components path along with their corresponding styling. I've used named exports for all the components to avoid ambiguity in imports.

### Testing

I've used `vitest`, `@testing-library/react` and `@testing-library/jest-dom` to test utility functions, hooks and components. Any piece of code requiring more than 1 test is added within a test suite to group related tests together.

### UI, Accessibilty & Misc

Coming to UI, I've kept the UI simple & elegant.
Responsiveness is adhered to by wrapping overflowing elements to the next line.
Bars in the bar chart are clearly distinguised to help in better cognition by using different colors for each bar along with proper horizontal spacing between bars. Total amount for a payment type can be seen by hovering on the bar.
In addition, I have also added micro-interactions like transform on hover to enhance the user experience.
