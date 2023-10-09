import React from 'react';

import { useQuery } from 'react-query';


export default function Home() {


  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/hello').then(res =>
      res.json()
    )
  )


  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      <h1>Hello from numbers</h1>
      {data.fact && <p>{data.fact}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
