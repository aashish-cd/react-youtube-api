import React, { useState } from 'react';
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
          id='query'
          name='query'
          type='text'
          onSubmit={fetchData}
          value={query}
          placeholder='search your favourite song'
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type='number'
          name='number'
          id='number'
          value={noOfResults}
          onChange={(e) => setNoOfResults(e.target.value)}
        />
        <button target='query' onClick={fetchData}>
          Search
        </button>
      </div>
      <div className={style.container}>
        {data.map((ss) => (
          <div>
            <iframe
              width='424'
              height='267'
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
