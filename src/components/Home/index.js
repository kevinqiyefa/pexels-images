import React, { useState, useEffect } from 'react';
import DisplayImages from '../DisplayImages';

import autoCorrect from './autoCorrect';

function Home() {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const clearMsg = () => {
    setTimeout(() => {
      setError(false);
      setErrorMsg('');
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let charStr = input.toLowerCase().replace(/[^a-z]/g, '');

    if (!input) {
      setError(true);
      setErrorMsg('Please Enter Somthing!');
    } else {
      charStr = autoCorrect(charStr);
      setInput(charStr);
    }

    clearMsg();
  };

  return (
    <div>
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

      <DisplayImages images={images} />
    </div>
  );
}

export default Home;
