# Zamavundla-ZAMDUZ120_FTC2301_GroupB_ZamavundlaDuze_IWA17

# Calendar App

## Overview

This repository contains a simple calendar application built with HTML, CSS, and JavaScript. The calendar dynamically generates and displays a table of weeks with corresponding days, highlighting the current month and marking today's date.

## Files

- **index.html**: The main HTML file that structures the calendar layout and includes references to external styles and scripts.

- **challenge1.css**: The CSS file that defines the visual styling for the calendar.

- **challenge-1.js**: The JavaScript file responsible for generating the calendar data and populating the HTML structure.

## Usage

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Open the `index.html` file in a web browser to view the calendar.

## Functionality

### `scripts.js`

The JavaScript file contains functions for generating calendar data and creating HTML elements dynamically.

#### Constants

- **MONTHS**: An array of month names.

#### Functions

- **getDaysInMonth(date)**: Returns the number of days in a given month.

- **createArray(length)**: Creates an array of a specified length.

- **createData()**: Generates calendar data for the current month, including week and day information.

- **addCell(existing, classString, value)**: Creates an HTML table cell with the specified class and value.

- **createHtml(data)**: Generates HTML for the calendar table based on the provided data.

#### Initialization

The script sets the calendar title with the current month and year, then generates and populates the HTML structure with the calendar data.

## Customization

To customize the calendar, you can modify the styles in the `styles.css` file or adjust the logic in the `scripts.js` file.

## Contributions

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).