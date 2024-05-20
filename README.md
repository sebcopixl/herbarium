# Herbarium Project

## Overview

The Herbarium project is a comprehensive system designed to manage and catalog botanical specimens. It consists of both frontend and backend components to provide a user-friendly interface for accessing and updating the database.

## Architecture

The project architecture is divided into two main components:

### Frontend

The frontend is responsible for providing a graphical user interface accessible via a web portal. It utilizes HTML, CSS, and JavaScript to create an intuitive user experience for interacting with the Herbarium system.

### Backend

The backend handles the core functionality of the Herbarium system, including API endpoints for data retrieval and manipulation. It is built using Node.js with Express.js to handle server-side logic and routing. The backend communicates with a MySQL database to store and retrieve botanical specimen information.

## Getting Started

### Prerequisites
- Docker [Install Docker](https://docs.docker.com/get-docker/)

### Why use Docker?
We use Docker to simplify the setup process for the Herbarium project. Docker allows us to package the frontend, backend, and database components into separate containers, making it easy to deploy the entire system with a single command.

### To run the Herbarium project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `docker-compose up` to start the Herbarium project.

*The docker-compose up command is used to start and run the services defined in the docker-compose.yml file. It creates and starts the containers based on the specified configurations.*

*Backend server at: http://localhost:3000*

4. To remove the containers and clean up the system, run `docker-compose down`.



### Container Setup
The `docker-compose.yml` file in the project directory defines the services required to run the Herbarium project. It includes the frontend, backend, and database components.

### Database Setup
The Herbarium project requires a MySQL database to store botanical specimen information.

   ```javascript
   const connection = mysql.createConnection({
     host: "localhost",
     port: "3306",
     user: "root",
     password: "your_mysql_password", // Replace "your_mysql_password" with your actual MySQL native password
     database: "herbarium",
   });
   ```

To see the database schema and initial data, check the `scripts` folder in the project directory.

   1.create_tables.sql: Create tables for the Herbarium database.

   2.insert_data.sql: Insert initial data into the database.

   23create_user.sql: Create a user for accessing the database


## Contributors

- [Seb Correa](https://github.com/sebcopixl)
- [Enrique Zarate](https://github.com/enrique-zarate)

Feel free to customize this README file with additional information specific to your project!
