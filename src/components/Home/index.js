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

  async function fetchImages(input) {
    await axios
      .get(`${API_URL}${input}&per_page=20&page=1`, {
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
      });
  }

  async function nextPageAndPrevPage(url) {
    setIsLoading(true);
    await axios
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
      setErrorMsg('Please Enter Something!');
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search for free photos"
          value={input}
          onChange={handleChange}
        />

        <button type="submit">
          <i className="fas fa-search" />
        </button>
        {error ? <p>{errorMsg}</p> : null}
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

export default Home;
