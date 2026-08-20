import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

function BooksPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/v1/books');
        if (!res.ok) throw new Error('Failed to fetch books');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div className="page-container">
    <h2 className="page-title">Books</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          available={book.available}
        />
      ))}
    </div>
  </div>
);
}

export default BooksPage;