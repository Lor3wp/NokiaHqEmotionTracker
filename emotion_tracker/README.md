# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Home Base Emotions - Documentation

## Emotions

- ***EmotionButtons*** is a component for creating the buttons in the main view (***EmotionButtonView***).
- Is a child component of ***Emotions***
- The buttons are created using ***emotionData***. In ***emotionData*** there is an array of objects. Each object represents one emotion. Each emotion has a ***subEmotion*** array which contains ***subEmotion*** objects.

***emotionData*** objects contain

- ***label*** *String*
- ***id*** *Int*
- ***icon*** *String*
- ***disabled*** *Boolean*
- ***rgbColor*** (the background color value for the button) *RGB*
- ***textColor*** *RGB*
- ***chartColor*** *RGB*
- ***count*** *Array*
- ***total*** *Int*
- ***total_sub*** *Array*

### Add a new button

<aside>
💡 TODO

- add a new object into the ***emotionData*** array.
- set all the values mentioned above
- Known limitations:
    - If a new button is added and it is wanted that the color of the new button is sent to the tree installation, the backend LED code needs to be modified.
</aside>

- ***Emotions*** is a parent component for ***EmotionButtons*** and ***EmotionStats***
    - Is a child component of ***EmotionButtonView***
- ***EmotionButtonView*** is a parent view for ***Emotions*** and ***EmotionStats***.
    - Is a child component of ***App***

### Sub-emotions

- ***SubEmotionButtons*** is a component where the sub-emotion buttons are created.
    - Is a child component of ***SubEmotions***
- ************SubEmotions************ is a component which creates the sub-emotion view.
    - Is a child component of ***************************************************EmotionButtonView,*************************************************** but is conditionally rendered if *********************************************************Show more emotions********************************************************* button is clicked.
- Sub-emotions are created in ***emotionData.subEmotions***
    - ******************label************ String*
    - *********id********* Int
    - ***rgbColor*** (the background color value for the button) *RGB*
    - ***textColor*** *RGB*
    - ******************************chartColor******************** RGB*
    - ***************total********** Int*
    - ***************count********** Array*

### Add a new sub-emotion

<aside>
💡 TODO

- add a new object into the ***emotionData.subEmotions*** array
- set all the values mentioned above
</aside>

## Emotion stats

- ***EmotionStats*** is a component holding a text element that displays the number of emotions shared today and in total. It’s fetching the data from the ***gettodayemotions*** endpoint.

## Data

- ***apiHooks*** - backend address
- ***charts*** - array of charts
    - ***type***
    - ***label***
    - ***icon***
    - ***chart_type***
- ***emotionData***
- ***monthsNamed*** - an object containing the names of months
- ***timeNavigatorData*** - an object containing the information for ***TimeNavigator** (see more in Statistics - TimeNavigator section)* component in the Statistics view (***StatsWindow***).
    - ***label*** - (i.e. “day”) *String*
    - ***id*** - *Int*
    - ***disabled*** - *Boolean*

## Utils

- ***CalculateDistance*** contains a function using the *Haversine formula*. It takes in ***longitude*** and ***latitude*** values and it calculates the distance between the given longitude and latitude with the longitude and latitude of Nokia HQ. It is used for location functionality, checking if the user is <1.5km from the Nokia HQ building.
- ***TimerFunctions*** contains ***timerStart*** and ***timerTick*** functions which are used to start a timer after the user clicks an emotion button on the main page. The time and how long the user needs to wait after clicking the button can be changed in ***Emotions*** component by changing the millisecond value of the ***timerTimeMs*** variable.

## Statistics

- ***NavigationBar*** is a component containing the top back button and burger menu for different chart types.
    - Is a child component of ***StatWindow***
- ***TimeNavigatorButton*** sets the chosen ***timeUnit** String (i.e. “day”)*
    - is a child component of ***TimeNavigator***
- *********************************TimeNavigator********************************* is a component containing the bottom navigation bar where a user can adjust the time frame of the data in the charts.
    - Is a child component of ***StatWindow***
- ***DatePicker*** is a component containing navigation arrows for changing the date, month, week, year or decade.
    - Is a child component of ***StatWindow***

### Charts

- There are 5 different chart types. Each chart is a separate component.
    - ***Barchart***
    - ***DoughnutChart*** (shows main and sub emotions total in the outer ring and sub-emotions in the inner ring)
    - ***Linechart*** (main emotions)
    - ***Mountainchart*** (shows percentage)
    - ***Piechart*** (not in use but can be easily implemented)
- All charts are child components of the ***AllCharts*** parent component. The ***AllCharts*** component is a child component of the ***StatWindow*** view.
- All charts can display data from
    - ***a day***
        - The doughnut chart has an hour range slider and single hour slider
            - ***HourSlider*** is a parent component for ***HourRange*** component
            - data is fetched within a certain hour range or from a specific hour (i.e. 9:00-15:00 or 14:00)
    - ***a week***
    - ***a month***
    - ***a year***
    - ***a decade***

## Location

- User’s location is checked by using ***************Geolocated*************** library.
- ***Geolocated*** library is used in ***App***
    - If user’s browser does not support Geolocated library, the page renders *Your browser does not support Geolocation* text.
    - If user’s browser supports the library then the app will ask for a permission to use the location.
        - If user denies the access for the location the app renders ************************************************************DisabledLocationView************************************************************
        - If access is granted the app checks the latitude and longitude of the user and the ******************************************************CalculateDistance****************************************************** function calculates if the user is <1.5km away from Nokia HQ building.
            - If user is >1.5k away from Nokia HQ building the app renders ******************************************TooFarAwayView******************************************
            - If user is <1.5km away from Nokia HQ building the app renders ***************************************************EmotionButtonView***************************************************
- While we wait for the permission to use the location the app renders ************************Loading************************ view.

## Tablet view

- Own view for tablet (in front of the tree installation)
- Has own *URL* and **path is found in ***App.***
- Contains only main emotion buttons, no sub-emotions.
- Does not have a timer.
- Does not offer statistics view.
- ***TabletEmotionButtons*** creates the emotion buttons for tablet view.
    - Is a child component of ******************************TabletView******************************
- When user clicks an emotion button on a tablet, all the LED-lights of the tree installation  change the color into the color of the chosen emotion for 2 seconds.
