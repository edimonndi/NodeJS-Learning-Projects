# Day 13 - Movie Search App

## Project Description
The **Movie Search App** is a simple web application that allows users to search for movies using the [OMDb API](http://www.omdbapi.com/). Users can search for any movie title and view details such as the poster, year, genre, director, actors, plot, and more.

---

## Features
- Search movies by title.
- Displays detailed movie information including:
  - Poster
  - Title
  - Year
  - Genre
  - Director
  - Actors
  - Plot summary
  - IMDb rating
- Responsive design using **Bootstrap 5**.

---

## Technologies Used
- **HTML5**: For the structure of the app.
- **CSS3**: For custom styling.
- **JavaScript**: For dynamic content loading and API integration.
- **OMDb API**: To fetch movie details.
- **Bootstrap 5**: For modern UI styling.

---

## How to Run the Project

### Prerequisites
1. Install **Node.js** (if not already installed).
2. Clone this repository:
   ```bash
   git clone https://github.com/edimonndi/NodeJS-Learning-Projects.git
    ```

3. Navigate to the project folder:
    ```bash
    cd "Day13 - Movie Search App"
    ```

## Steps to Run
1. Open index.html directly in your browser to use the app in client-side mode.
2. If running with a server:
    * Install an HTTP server (like http-server):
    ```bash
    npm install -g http-server
    ```
    * Run the server in the project folder:
    ```bash
    http-server
    ```
    * Open the provided localhost URL in your browser.


## Folder Structure
    
    Day13 - Movie Search App/
    ├── assets/
    │   ├── css/
    │   │   └── styles.css        # Custom CSS
    │   └── js/
    │       └── script.js         # JavaScript code for API calls
    ├── index.html                # Main HTML file
    └── README.md                 # Project documentation
    

## API Information
This app uses the OMDb API to fetch movie data.
API Key: ecef4bfc (already integrated in the app).

Example API endpoint:
    ```bash
    http://www.omdbapi.com/?t=Inception&apikey=ecef4bfc
    ```
