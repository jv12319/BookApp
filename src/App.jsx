import React, { useEffect, useState } from "react";
import './App.css'
import Search from './Search'


function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() =>{
    fetch("https://openlibrary.org/search.json?q=javascript")
    .then((response) => response.json())
    .then((data)  => setData(data))
    .then(() => setLoading())
    .catch(setError);

  }, []);

  if(loading) {
    return <h1>Currently Loading</h1>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  if(!data) {
    return null;
  }

  const searchHandler = (search) => {
    setSearch(search);
    if(search !== ""){
      const newResultsList = data.docs.filter((i) => {
        return Object.values(i).join(",").toLowerCase()
        .includes(search.toLowerCase())
      });
      setSearchResults(newResultsList);
    } else {
      setSearchResults(data.docs);
    }
  }

  //console.log(searchResults);

  return (
    <div className="container">
      <Search term={search} searchKeyword={searchHandler} />
      {search.length < 1 ? (
        <>
          <h2>JavaScript Books List</h2>
          {data.docs.map((work, index) => (
            <ol key={index}>
              <i className="book"></i>
              <h4>
                <span style={{ color: 'red' }}>Book Title: </span>
                {work.title}
                <br></br>
                <span style={{ color: 'red' }}>Publish Year: </span>
                {work.first_publish_year}
                <br></br>
                <span style={{ color: 'red' }}>ID:</span>
                {work.isbn[0]}
              </h4>
            </ol>
          ))}
        </>
      ) : (
        <>
          <h2>Search Results</h2>
          {searchResults.map((work, index) => (
            <ol key={index}>
              <i className="book"></i>
              <h4>
                <span style={{ color: 'red' }}>Book Title: </span>
                {work.title}
                <br></br>
                <span style={{ color: 'red' }}>Publish Year: </span>
                {work.first_publish_year}
                <br></br>
                <span style={{ color: 'red' }}>ID:</span>
                {work.isbn[0]}
              </h4>
            </ol>
          ))}
        </>
      )}
    </div>
  );
  
}

export default App;