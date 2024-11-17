# Notes Application

It is a simple and effective note management application that allows users to create, edit, delete, sort and organize notes. The application offers features for filing, un-filing and filtering notes by category to help users manage their tasks and ideas with ease. The app is developed as a Single Page Application (SPA) with a backend API and a frontend interface. 

## Table of Contents

1. [Technologies](#technologies) 💻
2. [Installation Instructions](#installation-instructions) 🛠️
3. [Environment Setup](#environment-setup) ⚙️
4. [Running the Application](#running-the-application) 🚀
5. [Default User Credentials](#default-user-credentials) 🔐🔑

## Technologies 💻

### Backend 🔧 

#### Dependencies
1. **@nestjs/common**: `^10.0.0` - Core NestJS package that provides decorators, utilities, and common functionality for building NestJS applications.
2. **@nestjs/config**: `^3.3.0` - A NestJS module for handling environment variables and configuration in a structured way.
3. **@nestjs/core**: `^10.0.0` - Core functionality for the NestJS framework, enabling the creation of modular, scalable applications.
4. **@nestjs/jwt**: `^10.2.0` - Provides JWT (JSON Web Token) handling for authentication and authorization in NestJS applications.
5. **@nestjs/mapped-types**: `*` - A package used for creating mapped types, useful for transforming DTOs and validation logic in NestJS.
6. **@nestjs/platform-express**: `^10.0.0` - Integrates NestJS with the Express platform for handling HTTP requests in web applications.
7. **@nestjs/typeorm**: `^10.0.2` - A package to integrate TypeORM with NestJS, providing a powerful ORM for database interaction.
8. **bcrypt**: `^5.1.1` - A library to hash and compare passwords securely, widely used in authentication systems.
9. **class-transformer**: `^0.5.1` - A utility to transform and validate classes in TypeScript, typically used for working with DTOs.
10. **class-validator**: `^0.14.1` - A package for validating class-based objects in TypeScript, often used in NestJS DTOs.
11. **joi**: `^17.13.3` - A powerful schema description language for JavaScript, often used for data validation.
12. **pg**: `^8.13.1` - The PostgreSQL client for Node.js, used to interact with PostgreSQL databases.
13. **reflect-metadata**: `^0.2.0` - A polyfill for JavaScript's `Reflect` API, enabling metadata reflection, commonly used by decorators in TypeScript.
14. **rxjs**: `^7.8.1` - A reactive programming library for handling asynchronous events and streams of data.
15. **typeorm**: `^0.3.20` - An ORM for TypeScript and JavaScript, used to manage database connections and entity models in NestJS.
15. **@nestjs/swagger**: `^8.0.5` - Integrates Swagger with NestJS to automatically generate API documentation based on decorators, following the Swagger/OpenAPI standard.

#### Development Dependencies

1. **@nestjs/cli**: `^10.0.0` - Command-line interface for NestJS to simplify project setup, development, and build tasks.
2. **@nestjs/schematics**: `^10.0.0` - Schematics for generating NestJS modules, controllers, and services to speed up development.
3. **@nestjs/testing**: `^10.0.0` - Provides utilities for writing unit and integration tests in NestJS applications.
4. **@types/bcrypt**: `^5.0.2` - TypeScript type definitions for bcrypt to ensure type safety when working with the bcrypt library.
5. **@types/express**: `^4.17.17` - TypeScript type definitions for Express, helping ensure correct type usage when building Express-based applications.
6. **@types/jest**: `^29.5.2` - TypeScript type definitions for Jest, enabling type safety when writing tests with Jest.
7. **@types/node**: `^20.3.1` - TypeScript type definitions for Node.js, ensuring correct type usage for Node.js built-in modules.
8. **@types/supertest**: `^6.0.0` - TypeScript type definitions for Supertest, used for testing HTTP requests in Node.js applications.
9. **@typescript-eslint/eslint-plugin**: `^6.0.0` - ESLint plugin for TypeScript, adding TypeScript-specific linting rules.
10. **@typescript-eslint/parser**: `^6.0.0` - ESLint parser for TypeScript files, enabling TypeScript support in ESLint.
11. **eslint**: `^8.42.0` - A tool for linting JavaScript and TypeScript code to enforce code quality and prevent errors.
12. **eslint-config-prettier**: `^9.0.0` - ESLint configuration to disable rules that conflict with Prettier for code formatting.
13. **eslint-plugin-prettier**: `^5.0.0` - ESLint plugin that runs Prettier as an ESLint rule to ensure code formatting consistency.
14. **jest**: `^29.5.0` - A testing framework for JavaScript, widely used for unit and integration testing.
15. **prettier**: `^3.0.0` - An opinionated code formatter that ensures consistent code style across the project.
16. **source-map-support**: `^0.5.21` - Adds support for source maps in Node.js, enabling better stack traces for debugging.
17. **supertest**: `^6.3.3` - A library for testing HTTP requests in Node.js, typically used with Jest for API testing.
18. **ts-jest**: `^29.1.0` - A Jest preset for handling TypeScript files, allowing Jest to run TypeScript tests seamlessly.
19. **ts-loader**: `^9.4.3` - A TypeScript loader for Webpack, used to compile TypeScript files during the build process.
20. **ts-node**: `^10.9.1` - A TypeScript execution engine for Node.js that allows running TypeScript code directly without compiling.
21. **tsconfig-paths**: `^4.2.0` - A package for supporting path mapping in TypeScript when using `ts-node`.
22. **typescript**: `^5.1.3` - A superset of JavaScript that adds static types, enabling type-checking and better tooling support.


### Containerization ☁️
- **Docker**: To simplify the configuration and deployment of the application in isolated containers.
  - Version: `27.2.0`

### Frontend 🌐

#### Dependencies
1. **@hookform/resolvers**: `^3.9.1` - Resolvers to integrate validation libraries like Zod or Yup with `react-hook-form`.
2. **@reduxjs/toolkit**: `^2.3.0` - A Redux library to simplify state management in React applications, with tools for handling state and side effects.
3. **bootstrap**: `^5.3.3` - A CSS framework for designing responsive interfaces with pre-built components and styles.
4. **bootstrap-icons**: `^1.11.3` - A collection of Bootstrap icons to easily incorporate into user interfaces.
5. **react**: `^18.3.1` - A JavaScript library for building interactive user interfaces and reusable components.
6. **react-dom**: `^18.3.1` - A package that allows React to interact with the DOM in web applications.
7. **react-hook-form**: `^7.53.1` - A library for handling forms in React easily, with minimal performance overhead.
8. **react-redux**: `^9.1.2` - A library to integrate Redux with React, providing tools to access the Redux state in React components.
9. **sweetalert2**: `^11.14.5` - A library for displaying customizable modal alerts, with visual effects and additional functionality.
10. **wouter**: `^3.3.5` - A small and fast router for React applications, allowing navigation based on URLs.
11. **zod**: `^3.23.8` - A data validation library for JavaScript/TypeScript, useful for safely validating data structures.

#### Development Dependencies:

1. **@eslint/js**: `^9.13.0` - ESLint configuration to use standard JavaScript rules.
2. **@types/react**: `^18.3.12` - Type definitions for React in TypeScript, providing autocomplete and type checking.
3. **@types/react-dom**: `^18.3.1` - Type definitions for ReactDOM in TypeScript, ensuring compatibility with React's DOM functions.
4. **@vitejs/plugin-react**: `^4.3.3` - A Vite plugin to support React-specific features in the Vite bundler.
5. **eslint**: `^9.13.0` - A tool for static code analysis that helps identify and fix issues in JavaScript code.
6. **eslint-plugin-react-hooks**: `^5.0.0` - An ESLint plugin to ensure proper usage of React hooks in components.
7. **eslint-plugin-react-refresh**: `^0.4.14` - An ESLint plugin that ensures correct implementation of React Fast Refresh.
8. **globals**: `^15.11.0` - Provides a list of common global variables, such as those for browsers and Node.js, to avoid reference errors.
9. **typescript**: `~5.6.2` - A programming language that extends JavaScript with static types, providing type checking at compile time.
10. **typescript-eslint**: `^8.11.0` - A set of tools to use ESLint with TypeScript, enabling code analysis with TypeScript-specific rules.
11. **vite**: `^5.4.10` - A fast and modern bundling and development tool for frontend applications, used to build and optimize web apps.

## Installation Instructions 🛠️

### Prerequisites

- **Node.js** (LTS version): Required to run both frontend and backend.
  - [Download Node.js](https://nodejs.org/)
- **PostgreSQL**: Required for database setup.
  - [Download PostgreSQL](https://www.postgresql.org/download/)
  
Make sure you have **npm** and **Docker** installed.

### Clone the Repository

```bash
git clone https://github.com/FernandoEmilianoFloresDeLaRiva/notes-app.git
cd backend
npm install
cd ..
cd frontend
npm install
```

## Environment Setup ⚙️
Make sure that the following environment variables are set for both frontend and backend or create your own .env by following the .env.template:

**Backend** (`backend/.env`)
```bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=1234567
POSTGRES_DB=notesdb
HOST=localhost
DB_PORT=5432
JWT_SECRET=NOTES_API
BCRYPT_JUMPS=10
```
**Frontend** (`frontend/.env`)
```bash
VITE_API_URL=http://localhost:3000/
```

## Running the Application 🚀
To run the full application, you need to start both the backend and the frontend. You can do it with Docker, manually or with the shell script.

### Using Docker:
Ensure Docker is installed, then run the following script:
```bash
docker compose up --build
```

### Doing with the shell script
```bash
// This command will give permission to run 
// the setup.sh script
chmod +x setup.sh

// Run the script
./setup.sh
```
This script will:

- Set up the database schema.
- Build and run the Docker containers for the backend and frontend.

If you did it with **docker** or the **shell script** the app will be available at http://localhost:3000 for the backend and http://localhost:80 for the frontend, also you can test the backend with swagger at http://localhost:3000/swagger 🚀.

### Doing it manually
```
// Turns on the backend
cd backend
npm run start:dev

cd ..

// Turns on the frontend
cd frontend
npm run dev
```

## Default User Credentials 🔐🔑
## You can use the default user credentials or create a new one
- **Email**: `defaultuser@example.com`
- **Password**: `defaultpassword`
