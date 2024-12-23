
# Weather API Application

A simple Weather Application that allows users to fetch and display the current weather for any location using the OpenWeatherMap API.

## Features
- Enter any location (city, town, area) to fetch weather details.
- Displays temperature, weather description, and an icon representing the weather condition.
- Built with modern styling using Bootstrap.
- Real-time error handling for invalid locations or connection issues.

## Technologies Used
- **Node.js** with **Express.js** for the backend.
- **Axios** for making HTTP requests to the OpenWeatherMap API.
- **Bootstrap 5** for responsive and modern frontend design.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-api-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd weather-api-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   API_KEY=your_openweathermap_api_key
   ```

5. Start the server:
   ```bash
   node app.js
   ```

6. Open your browser and go to:
   [http://localhost:3000](http://localhost:3000)

## File Structure
```
Day12 - Weather API/
├── app.js                 # Main server file
├── public/
│   ├── index.html         # Frontend HTML with Bootstrap
│   └── styles.css         # (Optional) Add custom styles here
├── package.json           # Project metadata and dependencies
└── .env                   # API key configuration (not included in repo)
```

## Screenshots
![Screenshot](https://via.placeholder.com/800x400?text=Weather+App+Screenshot)

## License
This project is licensed under the MIT License. Feel free to use and modify it.

---

**Enjoy exploring weather around the world! 🌦️**
