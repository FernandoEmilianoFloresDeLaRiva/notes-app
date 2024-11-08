# Notes Application

A simple web application that allows users to create, edit and delete notes. The app is developed as a Single Page Application (SPA) with a backend API and a frontend interface. 

## Table of Contents

1. [Technologies](#technologies) 💻
2. [Installation Instructions](#installation-instructions) 🛠️
3. [Environment Setup](#environment-setup) ⚙️
4. [Running the Application](#running-the-application) 🚀
5. [Default User Credentials](#default-user-credentials) 🔐🔑

## Technologies 💻

### Backend 🔧 
- **NestJS**: A framework for building efficient, scalable Node.js server-side applications.
  - Version: `^10.0.0`
- **PostgreSQL**: A relational database for storing notes.
  - Version: `16.2`
- **TypeORM**: ORM to interact with PostgreSQL.
  - Version: `^0.3.20`
- **bcrypt**: For password hashing.
  - Version: `^5.1.1`
- **JWT**: For generating JSON Web Tokens for authentication.
  - Version: `^10.2.0`

### Containerization ☁️
- **Docker**: To simplify the configuration and deployment of the application in isolated containers.
  - Version: `27.2.0`

### Frontend 🌐
- **React**: A JavaScript library for building user interfaces.
  - Version: `^18.3.1`
- **Vite**: A fast, opinionated web bundler.
  - Version: `^5.4.10`
- **Bootstrap**: CSS framework for responsive layouts.
  - Version: `^5.3.3`
- **React-Redux**: State management library for React.
  - Version: `^9.1.2`

## Installation Instructions 🛠️

### Prerequisites

- **Node.js** (LTS version): Required to run both frontend and backend.
  - [Download Node.js](https://nodejs.org/)
- **PostgreSQL**: Required for database setup.
  - [Download PostgreSQL](https://www.postgresql.org/download/)
  
Make sure you have **npm** and **Docker** installed.

### Clone the Repository

```bash
git clone https://github.com/ensolvers-github-challenges/FloresDeLaRiva-003805.git
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

If you did it with **docker** or the **shell script** the app will be available at http://localhost:3000 for the backend and http://localhost:80 for the frontend 🚀.

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