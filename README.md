# itue301-exam-24DCE110-B
# Library Book Management System

A full-stack Library Book Management System built with **React**, **Express.js**, and **MongoDB (Mongoose)** as part of the ITUE301 Advanced Web Development Frameworks open-book practical examination (Set B).

## Project Structure

```
itue301-exam-[roll-number]-[batch]/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── server.js
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
```

## Tech Stack

- **Frontend:** React + React Router (Vite)
- **Backend:** Express.js
- **Database:** MongoDB with Mongoose

## Frontend Setup and Run

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The app will be available at:
   ```
   http://localhost:5173
   ```
   (or the next available port, e.g. `5174`)

## Backend Setup and Run

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` folder (see **Environment Variables** below). Do not commit this file.
4. Start the server:
   ```bash
   node server.js
   ```
   or
   ```bash
   npm start
   ```
5. The API will be available at:
   ```
   http://localhost:5000
   ```

## MongoDB Setup

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or use a local MongoDB instance).
2. Create a database user under **Database Access** with a username and password.
3. Under **Network Access**, allow access from your current IP (or allow access from anywhere for exam/demo purposes).
4. Get your connection string from **Connect → Drivers**, and add your database name (e.g. `library`) to the URI.
5. Paste the connection string into the `MONGO_URI` variable in your `.env` file (see below).
6. Mongoose will automatically create the database and collections the first time data is inserted — no manual setup of collections is required.

## Environment Variables

Create a `.env` file inside the `backend/` folder with the following variables (a template is provided in `.env.example`):

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- `PORT` — the port the Express server runs on.
- `MONGO_URI` — your MongoDB connection string (Atlas or local), including the database name.

**Note:** Never commit the `.env` file to GitHub. Only `.env.example` (with placeholder values) should be committed.

## API Endpoints

| Method | Endpoint                  | Purpose                          |
|--------|----------------------------|-----------------------------------|
| GET    | `/api/v1/books`             | Return all books                  |
| GET    | `/api/v1/borrowings`        | Return all borrowing records      |
| POST   | `/api/v1/borrowings`        | Create a new borrowing record     |
| POST   | `/api/v1/mongo/books`       | Create a book document in MongoDB |
| GET    | `/api/v1/mongo/books`       | Return all books from MongoDB     |

## Routes (Frontend)

| Route      | Component   |
|------------|-------------|
| `/`        | HomePage    |
| `/books`   | BooksPage   |
| `/borrow`  | BorrowPage  |

## Author

Krina Pipaliya — 24DCE110 — Batch B
