import React from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, { ButtonType } from './components/button';
import Title from './components/title/';
import UserName from './components/userName';
import Tabs from './components/tabs';

function App() {
   return (
      <div className={styles.app}>
         <div className={styles.buttons_wrap}>
            <div className={styles.primary_wrap}>
               <Button
                  title={'Primary'}
                  click={() => alert('Hello from Primary')}
                  type={ButtonType.Primary}
               />
               <Button
                  type={ButtonType.Primary}
                  title={'Primary'}
                  disabled={true}
               />
            </div>
            <div className={styles.secondary_wrap}>
               <Button
                  title={'Secondary'}
                  click={() => alert('Hello from Secondary')}
                  type={ButtonType.Secondary}
               />

               <Button
                  type={ButtonType.Secondary}
                  title={'Secondary'}
                  disabled={true}
               />
            </div>
            <div className={styles.error_wrap}>
               <Button
                  title={'Error'}
                  click={() => alert('Hello from Error')}
                  type={ButtonType.Error}
               />

               <Button
                  type={ButtonType.Error}
                  title={'Error'}
                  disabled={true}
               />
            </div>
         </div>
         <div className={styles.title_wrap}>
            <Title className={styles.title} title={'Sign Up'} />
         </div>
         <div className={styles.userName_wrap}>
            <UserName className={styles.UserName} title={'Artem Malkin'} />
         </div>
         <div className={styles.tabs_wrap}>
            <Tabs />
         </div>
      </div>
   );
}

export default App;
