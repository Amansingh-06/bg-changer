# Background Color Changer

This project is a simple **React** app that allows users to change the background color of the page by clicking different color buttons. Each button represents a color, and clicking it will change the background to the respective color.

## Features

- **Interactive Buttons**: Clicking on a button instantly changes the background color of the page.
- **Multiple Colors**: Includes options like red, blue, green, yellow, white, black, pink, and olive.
- **Responsive Design**: The button layout is responsive and centered at the bottom of the screen.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bg-changer.git

## Usage
Run the application:

bash
Copy code
npm start
Open your browser and go to http://localhost:5173.

## Code Explanation
useState Hook:

We use the useState hook to manage the background color of the page. The initial color is set to black ("Black"), and it changes when a button is clicked.
Color Buttons:

Each button has an onClick event handler that triggers the setColor function with a specific color. For example, clicking the red button will call setColor("red"), and the page background changes to red.
Tailwind CSS:

The project uses Tailwind CSS classes for styling. The buttons are styled with colors, padding, and rounded corners for a sleek appearance.

Click on any of the color buttons to change the background color of the page.
