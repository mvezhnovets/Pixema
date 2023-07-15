import { type CardAPI } from '~/entities/Card';

import cardsStyle from './Cards.module.scss';

export const Cards = ({ card }: { card: CardAPI[] }) => {
  return (
    <div className={cardsStyle.container}>
      {card.map((card) => (
        <div
          className={cardsStyle.card}
          key={card.id}
        >
          {card.name}
          <div>
            <img src={card.poster.url}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
