import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { type CardAPI } from '~/entities/Card';

import { getRatingClass } from './Card.utils';
import cardsStyle from './Cards.module.scss';

export const Cards = ({ card }: { card: CardAPI[] }) => {
  return (
    <div className={cardsStyle.main}>
      {card.map((card) => (
        <div
          className={cardsStyle.card}
          key={card.id}
        >
          <p
            className={`${classNames({
              [cardsStyle.rating]: true,
              [cardsStyle[getRatingClass(card.rating.kp)]]: true
            })}`}
          >
            {card.rating.kp.toFixed(1)}
          </p>
          <Link to={`/card/${card.id}`}>
            <div>{card.poster ? <img src={card.poster.url}></img> : null}</div>
            <h3>{card.alternativeName}</h3>
            <h3>{card.name}</h3>
            <p>
              {(card.year && `${card.year} | `) || ''}
              {card.genres.length > 0 ? `${card.genres[0].name} | ` : ''}
              {card.countries.length > 0 ? card.countries[0].name : ''}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
