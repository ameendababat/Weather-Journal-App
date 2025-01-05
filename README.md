# 🌦️ Weather-Journal App 🌤️

Welcome to the **Weather-Journal App**! 🚀 This app allows you to check the weather based on your ZIP code and add your personal feelings in real-time. Dive into the world of Web APIs, asynchronous JavaScript, and dynamic User Interface updates.

## 🔍 Project Overview

The **Weather-Journal App** gives you hands-on experience with:

- Fetching weather data from an external API (OpenWeatherMap).
- Collecting user input like ZIP codes and feelings.
- Dynamically updating the user interface in real-time using JavaScript promises.

##🚀 Project Features

### 1. **API Integration** 
- Fetch weather data using the OpenWeatherMap API.

### 2. **User Input**
- Collect ZIP codes and user feelings to personalize the experience.

### 3. **Dynamic UI**
- Real-time updates to the UI based on the weather data and user input.

## 🛠️ Key Technologies

- **Web APIs**: Retrieve external data from OpenWeatherMap.
- **Express Framework**: Handle routing and server setup.
- **JavaScript Promises**: Manage asynchronous operations and data flow.
- **DOM Manipulation**: Dynamically update the web page to reflect real-time data.

## 🔧 Implementation Details

### 🖥️ Server-Side (server.js)

1. **Set Up Express Server**:
   - Middleware: `body-parser`, `cors`
   
2. **Routes**:
   - GET and POST routes to handle user input and send/receive data.
   
3. **Global Object**:
   - `projectData`: Stores collected weather and user data.

### 🌐 Client-Side (website/app.js)

1. **Fetch API Data**:
   - Use `fetch()` and async/await to fetch weather data.
   
2. **Post Data to Server**:
   - Send weather data and user feelings to the server.

3. **Update UI**:
   - Fetch data from the server and update the DOM with weather information and user input.

### 📄 HTML and CSS

- **HTML**:
   - Input fields for ZIP code and feelings.
   - A "Generate" button to trigger data fetching.
   
- **CSS**:
   - Modern styling for a polished and user-friendly look.



