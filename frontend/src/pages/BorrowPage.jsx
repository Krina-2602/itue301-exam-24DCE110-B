import { useState } from 'react';

function BorrowPage() {
  const [memberName, setMemberName] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ memberName, bookTitle, borrowDate, returnDate });
    // Task 3/4: send this to the backend with fetch/axios POST
  };

  return (
  <div className="page-container">
    <h2 className="page-title">Borrow a Book</h2>
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label>Member Name: </label><br />
        <input value={memberName} onChange={(e) => setMemberName(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div>
        <label>Book Title: </label><br />
        <input value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div>
        <label>Borrow Date: </label><br />
        <input type="date" value={borrowDate} onChange={(e) => setBorrowDate(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div>
        <label>Return Date: </label><br />
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} style={{ width: '100%' }} />
      </div>
      <button type="submit">Borrow</button>
    </form>

    {memberName && <p style={{ textAlign: 'center', marginTop: '20px' }}>Member entering: {memberName}</p>}
    {bookTitle && <p style={{ textAlign: 'center' }}>Selected book: {bookTitle}</p>}
  </div>
);
}

export default BorrowPage;