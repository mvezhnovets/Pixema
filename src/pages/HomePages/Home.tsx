import { useEffect, useState } from 'react';

import { fetchMovies } from '~/api/fetchMovies';
import { type CardAPI } from '~/entities/Card';
import { Cards } from '~/features/Cards/Cards';

import homeStyle from './HomePage.module.scss';

export const Home = () => {
  const [card, setCard] = useState<CardAPI[] | []>([]);
  const [limit, setLimit] = useState<number>(8);
  const [error, setError] = useState('');
  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setCard(data.docs);
        setLimit(data.limit);
      })
      .catch((error: Error) => setError(error.message));
  }, [limit]);

  return (
    <>
      {error ? (
        <div className={homeStyle.Error}>{error}</div>
      ) : (
        <div className={homeStyle.container}>
          <Cards card={card}></Cards>
        </div>
      )}
    </>
  );
};
