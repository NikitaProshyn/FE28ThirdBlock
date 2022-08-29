import React, { useState } from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, { ButtonType } from './components/button';
import Tabs from './components/tabs';
import Input from './components/input';
import User from './components/user';
import Header from './components/header';
import Menu from './components/header/Menu';
import { Burger, Cancel, SearchIcon } from './assets/icons';
import CardList from './components/cardList';

function App() {
   const [value, setValue] = useState<string>('');

   const onChange = (inputValue: string) => {
      setValue(inputValue);
   };

   const [isOpened, setOpened] = useState(false);

   return (
      <div className={styles.app}>
         <Header
            onClick={() => setOpened(!isOpened)}
            title={isOpened ? <Cancel /> : <Burger />}
            input={
               isOpened ? null : (
                  <Input
                     placeholder={'Placeholder'}
                     onChange={onChange}
                     value={value}
                  />
               )
            }
         />
         {isOpened && <Menu />}
         <CardList />
      </div>
   );
}

export default App;
