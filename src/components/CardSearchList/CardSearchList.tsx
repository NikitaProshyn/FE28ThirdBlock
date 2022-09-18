import React, { useState, useEffect } from 'react';
//@ts-ignore
import styles from './CardSearchList.module.css';
import classNames from 'classnames';
import CardSearch from '../CardSearch/CardSearch';
import { CardSearchPropsType } from '../CardSearch/types';

type CardSearchList = Array<CardSearchPropsType>;

const CardSearchList = () => {
   const CARD_MOCK = [
      {
         id: 0,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 1,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 2,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 3,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 4,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 5,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 6,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 7,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 8,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 9,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
      {
         id: 10,
         image: 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
         text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research labs power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
         date: 'April 20, 2021',
         lesson_num: 0,
         title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...',
         author: 0,
      },
   ];
   const [searchList, setSearchList] = useState<CardSearchList | null>([]);

   const searchElement = 'Astronauts';

   useEffect(() => {
      setSearchList(CARD_MOCK);
   }, []);

   return searchList && searchList.length > 0 ? (
      <div className={classNames(styles.searchListWrapper)}>
         <div className={classNames(styles.searchListTitle)}>
            Search results {searchElement}
         </div>
         <div className={classNames(styles.searchListCardWrapper)}>
            {searchList.map((card, id) => {
               return <CardSearch card={card} key={card.id} />;
            })}
         </div>
      </div>
   ) : null;
};
export default CardSearchList;
