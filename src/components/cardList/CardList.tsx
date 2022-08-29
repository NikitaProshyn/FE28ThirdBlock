import React from 'react';
//@ts-ignore
import styles from './CardList.module.css';

import Card from '../card';
import { CardSize } from '../card/Card';

import classNames from 'classnames';
import card from '../card';
import cardList from '.';

const CardList: any = () => {
   const CARD_MOCK = [
      {
         id: 0,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 1,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 2,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 3,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 4,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 5,
         image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 6,
         image: 'string',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 7,
         image: 'string',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 8,
         image: 'string',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 9,
         image: 'string',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
      {
         id: 10,
         image: 'string',
         text: 'string',
         date: '2021-12-12',
         lesson_num: 0,
         title: 'string',
         author: 0,
      },
   ];

   return CARD_MOCK.map((card, id) => {
      if (id < 1) {
         return (
            <div className={classNames(styles.cardLargeWraper)}>
               <Card card={card} key={card.id} size={CardSize.Large} />
            </div>
         );
      } else if (id >= 1 && id <= 4) {
         return (
            <div className={classNames(styles.cardMediumWraper)}>
               <Card card={card} key={card.id} size={CardSize.Medium} />
            </div>
         );
      } else {
         <div className={classNames(styles.cardSmallWraper)}>
            <Card card={card} key={card.id} size={CardSize.Small} />
         </div>;
      }
   });
};

export default CardList;
