# Cosmic Insights - Life Path Prediction Web App

A simple web application that generates personalized daily predictions based on a user's life path number calculated from their birth date and name analysis.

## Features

- **Life Path Calculation**: Automatically calculates your life path number from your date of birth
- **Name Analysis**: Uses the first letter of your name to add personalized attributes to predictions
- **Daily Predictions**: Generates unique predictions based on your life path number
- **Local Storage**: Remembers your information for return visits
- **Share Functionality**: Easily share your predictions with others
- **Responsive Design**: Works on both mobile and desktop devices

## How It Works

The application uses numerology principles to calculate a life path number from your birth date. This number (1-9) represents your key characteristics and life journey. The prediction engine combines this with name analysis to generate personalized daily insights.

## Running the Application

This is a client-side application that runs entirely in the browser.

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Alternatively, you can host it on any simple web server or hosting service like GitHub Pages

No server-side code or additional dependencies are required.

## Technologies Used

- HTML5
- CSS3 with custom animations
- Vanilla JavaScript
- Local Storage API
- Web Share API (with clipboard fallback)

## Customization

You can customize the predictions and meanings by editing the `predictionTemplates` and `lifePathMeanings` objects in the `script.js` file.

## License

This project is open-source and free to use for personal or commercial purposes. 