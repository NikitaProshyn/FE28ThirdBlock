import React, { FC } from 'react';
//@ts-ignore
import styles from './Tabs.module.css';
import { TabsPropsType } from './type';

const TABS_NAME = [
   {
      key: 'All',
      title: 'All',
      className: styles.all,
   },
   {
      key: 'My favorites',
      title: 'My favorites',
      className: styles.favorites,
   },
   {
      key: 'popular',
      title: 'Popular',
      className: styles.popular,
      disabled: true,
   },
];

const Tabs = () => {
   return (
      <ul className={styles.tab_list}>
         {TABS_NAME.map((tab) => (
            <li className={styles.tab_list_item}>
               <button
                  key={tab.key}
                  className={tab.className}
                  disabled={tab.disabled}
               >
                  {tab.title}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default Tabs;
