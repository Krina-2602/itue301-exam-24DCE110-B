function BookCard({ title, author, category, available }) {
  return (
    <div
      style={{
        border: '1px solid #2a2a2a',
        borderRadius: '10px',
        padding: '20px',
        margin: '10px',
        width: '250px',
        backgroundColor: '#1a1a1a',
        boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        transition: 'transform 0.15s ease',
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#aaa', margin: '4px 0' }}>Author: {author}</p>
      <p style={{ color: '#aaa', margin: '4px 0' }}>Category: {category}</p>
      <p
        style={{
          marginTop: '10px',
          fontWeight: 'bold',
          color: available ? '#4caf50' : '#f44336',
        }}
      >
        {available ? '● Available' : '● Not Available'}
      </p>
    </div>
  );
}

export default BookCard;