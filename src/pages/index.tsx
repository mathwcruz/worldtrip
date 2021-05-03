import Head from 'next/head'
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/continents")
      .then(response => setData(response.data))
  }, [])
  console.log(data);

  return (
    <>
      <Head>
        <title>Home - worldtrip</title>
      </Head>
      <ul>
        {data?.map(d => (
          <li key={d.id}>
            <h1>{d.name}</h1>
            <img src={d.slider_url} />
            <p>{d.slider_description}</p>
            <img src={d.banner_url} />
            <p>{d.banner_description}</p>
            <span>{d.total_countries}</span>
            <span>{d.total_languages}</span>
            <span>{d.total_cities_one_hundred_plus}</span>
            <ul>
              {d?.city?.map(city => (
                <li key={city.id}>
                  <h1>{city.city_name}</h1>
                  <p>{city.country_name}</p>
                  <img src={city.banner_url} />
                  <img src={city.flag_url} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
