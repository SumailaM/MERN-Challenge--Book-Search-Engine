import React, { useState } from 'react';
import { ApolloProvider, useQuery } from '@apollo/client'; // Import necessary components from Apollo Client
import { client } from './config/client'; // Import the Apollo Client instance
import { GET_BOOKS } from './graphql/queries'; // Import the GraphQL query for fetching books

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

  // Execute the GET_BOOKS query using useQuery hook with searchTerm as variable
  const { loading, error, data } = useQuery(GET_BOOKS, {
    variables: { searchTerm }, // Pass searchTerm as a variable to the query
  });

  // Function to handle changes in the search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the searchTerm state with the input value
  };

  // If data is still loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // If there's an error, display an error message
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Search Books</h1>
      {/* Input field for searching books */}
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {/* Map through the data array and display book details */}
        {data.books.map(book => (
          <li key={book.bookId}>
            <h3>{book.title}</h3>
            <p>Author: {book.authors.join(', ')}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// MainApp component wraps the App component with ApolloProvider to provide ApolloClient instance
function MainApp() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default MainApp;
