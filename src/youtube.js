import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './youtube.module.scss';
const url = 'https://www.googleapis.com/youtube/v3/search';
const key = 'AIzaSyDIkZnXgxHLDmBMcKsjXUI9x6j4bqlaJu8';

const Youtube = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [noOfResults, setNoOfResults] = useState(3);

  // useEffect(() => {
  //   fetchData();
  // }, [query]);
  const fetchData = async () => {
    const response = await axios.get(
      `${url}?part=snippet&key=${key}&q=${query}&maxResults=${noOfResults}`
    );
    const { items } = response.data;
    setData(items);
    console.log(data);
  };

  return (
    <section>
      <div className='form'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
      </div>
      <div className={style.container}>
        {data.map((ss) => (
          <div>
            <iframe
              width='949'
              height='534'
              src={`https://www.youtube.com/embed/${ss.id.videoId}`}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
