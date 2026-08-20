const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// In-memory data
const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', category: 'Programming', isbn: '9780132350884', available: true },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', category: 'Programming', isbn: '9780201616224', available: false },
];
let borrowings = [];

// Custom request logger middleware — applied globally
function requestLogger(req, res, next) {
  console.log(`[${req.method}] ${req.path} [${new Date().toISOString()}]`);
  next();
}
app.use(requestLogger);

// Routes
app.get('/api/v1/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/v1/borrowings', (req, res) => {
  res.status(200).json(borrowings);
});

// Task 5: Create a book via Mongoose (demonstrates working schema)
app.post('/api/v1/mongo/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      details: err.message,
    });
  }
});

// Get all books from MongoDB (to verify data was saved)
app.get('/api/v1/mongo/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch books' });
  }
});

app.post('/api/v1/borrowings', (req, res, next) => {
  try {
    const { memberName, bookTitle, borrowDate, returnDate } = req.body;
    if (!memberName || !bookTitle) {
      const error = new Error('memberName and bookTitle are required');
      error.status = 400;
      throw error;
    }
    const newBorrowing = {
      id: borrowings.length + 1,
      memberName,
      bookTitle,
      borrowDate,
      returnDate,
      status: 'borrowed',
    };
    borrowings.push(newBorrowing);
    res.status(201).json(newBorrowing);
  } catch (err) {
    next(err);
  }
});

// 404 for unknown routes
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// Global error handler — must be last
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));