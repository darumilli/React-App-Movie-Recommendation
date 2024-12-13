# Movie Recommendation Application

This is a Movie Recommendation Application built with React. It allows users to search for movies, view details about a selected movie, and get recommendations for similar movies.

## Features

- Search for movies by name
- View detailed information about a selected movie
- Get recommendations for similar movies
- Responsive design
- Personalized movie recommendations based on user preferences
- Integration with a Flask backend for handling API requests

## Installation

To get started with the Movie Recommendation Application, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/movie-recommendation-application.git
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

4. **Build the application:**

     ```sh
     npm run build
     ```

5. **Run the application:**

     ```sh
     npm start
     ```

6. **Set up the Flask backend:**

     Follow the instructions in the backend repository to set up and run the Flask server.

7. **Configure environment variables:**

     Create a `.env` file in the root directory and add the necessary environment variables for the React app and Flask backend.

8. **Run the Flask backend:**

     ```sh
     flask run
     ```

## Usage

Once the application is running, you can:

- Search for movies by name
- View detailed information about a selected movie
- Get personalized recommendations based on your preferences

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
