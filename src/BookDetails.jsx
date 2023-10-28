import React, { useEffect, useState } from "react";
import './App.css'
import Search from './Search'
import App from './App'

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Publish Year:</strong> {book.first_publish_year}</p>
      <p><strong>ID:</strong> {book.isbn[0]}</p>
      <p><strong>Number of Pages:</strong> {book.number_of_pages_median}</p>
      <a href={`https://www.amazon.com/s?field-keywords=
      ${book.title}`} target="_blank" rel="noopener noreferrer">
        Buy on Amazon</a>
    </div>
  );
};

export default BookDetails;