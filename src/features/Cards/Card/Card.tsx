import classNames from 'classnames';

import { type CardAPI } from '~/entities/Card';

import cardStyle from './Card.module.scss';
import { getRatingClass } from '../Card.utils';

export const Card = ({ card }: { card: CardAPI }) => {
  return (
    <>
      {card ? (
        <div className={cardStyle.container}>
          <div>
            {(card.poster && (
              <img
                className={cardStyle.img}
                src={card.poster.url}
              ></img>
            )) ||
              null}
          </div>
          <div className={cardStyle.text}>
            <span className={cardStyle.genres}>
              {card.genres &&
                card.genres
                  .map(
                    (genre) =>
                      genre.name.charAt(0).toUpperCase() + genre.name.slice(1)
                  )
                  .join(', ')}
            </span>
            <h1>{card.alternativeName}</h1>
            <h2>{card.name}</h2>
            <div className={cardStyle.rating}>
              <p
                className={`${classNames({
                  [cardStyle.defaultRating]: true,
                  [cardStyle[getRatingClass(card.rating.kp)]]: true
                })}`}
              >
                {card.rating.kp.toFixed(1)}
              </p>
            </div>
            <p className={cardStyle.description}>{card.description}</p>
            <div className={cardStyle.totalInfo}>
              <div className={cardStyle.info}>
                <span>Year </span>
                <span>{card.year}</span>
              </div>
              <div className={cardStyle.info}>
                <span>Country </span>
                <span>
                  {card.countries &&
                    card.countries.map((country) => country.name).join(', ')}
                </span>
              </div>
              <div className={cardStyle.info}>
                <span>Budget </span>
                {(card.budget.value && (
                  <span>${card.budget.value.toLocaleString()}</span>
                )) ||
                  '-'}
              </div>
              <div className={cardStyle.info}>
                <span>Production </span>
                <span>
                  {card.productionCompanies &&
                    card.productionCompanies
                      .map((production) => production.name)
                      .join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
