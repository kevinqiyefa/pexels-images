import React, { useState } from 'react';
import axios from 'axios';

import DisplayImages from '../DisplayImages';
import autoCorrect from './autoCorrect';
import Loader from '../Loader';
import './style.css';

//API Key
// Hard code the API here for demo purpose.
const apiKey =
  process.env.API_KEY ||
  '563492ad6f91700001000001d3e99b4b6c03493ca59a246862da084b';

const API_URL = 'https://api.pexels.com/v1/search?query=';

function Home() {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const clearMsg = () => {
    setTimeout(() => {
      setError(false);
      setErrorMsg('');
    }, 3000);
  };

  function fetchImages(input) {
    axios
      .get(`${API_URL}${input}&per_page=15&page=1`, {
        headers: { Authorization: apiKey }
      })
      .then(response => {
        // handle success
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        // handle error
        setError(true);
        setErrorMsg('Cannot access into this API!');
        setIsLoading(false);
      });
  }

  function nextPageAndPrevPage(url) {
    setIsLoading(true);
    axios
      .get(url, {
        headers: { Authorization: apiKey }
      })
      .then(response => {
        // handle success
        setData(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        // handle error
        setIsLoading(false);
        setError(true);
        setErrorMsg('Cannot access into this API!');
        clearMsg();
      });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    // remove all non-alphbet and lower case the string
    let charStr = input.toLowerCase().replace(/[^a-z]/g, '');

    if (!charStr) {
      setError(true);
      setErrorMsg('Please enter something else!');
      setIsLoading(false);
    } else {
      charStr = autoCorrect(charStr);

      fetchImages(charStr);
    }
    setInput(charStr);

    clearMsg();
  };

  return (
    <div className="home-page">
      <h1>The best free stock photos shared by talented creators.</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <div>
          <input
            type="text"
            name="text"
            placeholder="Search for free photos"
            value={input}
            onChange={handleChange}
            required
            className="input-field"
          />

          <button type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
        {error ? <p className="error_msg">* {errorMsg}</p> : null}
      </form>

      {isLoading ? (
        <Loader />
      ) : Object.keys(data).length > 0 ? (
        <DisplayImages
          images={data.photos}
          nextPage={data.next_page}
          prevPage={data.prev_page}
          nextPageAndPrevPage={url => nextPageAndPrevPage(url)}
        />
      ) : null}
    </div>
  );
}

export default React.memo(Home);
