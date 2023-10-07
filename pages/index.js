import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [fact, setFact] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Hello from numbers</h1>
      {fact && <p>{fact}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
