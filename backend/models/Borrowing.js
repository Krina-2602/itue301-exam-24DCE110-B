const mongoose = require('mongoose');

const borrowingSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  borrowDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  status: { type: String, enum: ['borrowed', 'returned', 'overdue'], default: 'borrowed' },
});

module.exports = mongoose.model('Borrowing', borrowingSchema);