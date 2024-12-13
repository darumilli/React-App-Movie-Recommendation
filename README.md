# Movie Recommendation Application

This is a Movie Recommendation Application built with React. It allows users to search for movies, view details about a selected movie, and get recommendations for similar movies.

## Features

- Search for movies by name
- View detailed information about a selected movie
- Get recommendations for similar movies
- Responsive design
- Personalized movie recommendations based on user preferences
- Integration with a FastAPI backend for handling API requests

## Installation

To get started with the Movie Recommendation Application, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/darumilli/React-App-Movie-Recommendation.git
    ```

2. **Install Node.js and npm:**

     Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

     For Windows and macOS, download the installer and follow the instructions.

     For Linux, you can use a package manager to install Node.js and npm. For example, on Ubuntu:

     ```sh
     sudo apt update
     sudo apt install nodejs npm
     ```

3. **Install the npm packages:**

     ```sh
     npm install
     ```

     If you encounter issues, you can try installing with the `--legacy-peer-deps` flag:

     ```sh
     npm install --legacy-peer-deps
     ```

     Or with the `--force` flag:

     ```sh
     npm install --force
    ```

4. **Configure the proxy:**

    If you encounter issues with the backend API requests, you can try setting different values for the proxy in your `package.json` file. For example, you can use `localhost` with port `8000` or the loopback IP `127.0.0.1`:

    ```json
    "proxy": "http://localhost:8000"
    ```

    or

    ```json
    "proxy": "http://127.0.0.1:8000"
    ```

    ```
> **Note:** Using the loopback IP `127.0.0.1` worked for me.


5. **Build the application:**

    ```sh
    npm run build
    ```

6. **Run the application:**

    ```sh
    npm start
    ```

7. **Set up the FastAPI backend:**

    Follow the instructions in the backend repository to set up and run the FastAPI server with Gunicorn.

## Usage

Once the application is running, you can:

- Search for movies by name
- View detailed information about a selected movie
- Get personalized recommendations based on your preferences

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
