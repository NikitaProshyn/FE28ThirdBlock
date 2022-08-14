import React from 'react';
// @ts-ignore
import styles from './App.module.css';

const Button = ({ title, click, className, condition }: any) => {
   return (
      <button
         onClick={click}
         className={`${styles.button} ${className || ''}`}
         disabled={condition}
      >
         {title}
      </button>
   );
};

const User = ({ userName }: any) => {
   return (
      <div className={styles.user}>
         <p>{userName}</p>
      </div>
   );
};

function App() {
   return (
      <div className={styles.app}>
         <div className={styles.buttons_wrap}>
            <Button
               title={'Primary'}
               click={() => alert('Hello from Primary')}
               className={styles.primary}
            />

            <Button title={'Primary'} condition={true} />

            <Button
               title={'Secondary'}
               click={() => alert('Hello from Secondary')}
               className={styles.secondary}
            />

            <Button title={'Secondary'} condition={true} />

            <Button
               title={'Secondary2'}
               click={() => alert('Hello from Secondary2')}
               className={styles.secondary2}
            />

            <Button
               title={'Secondary2'}
               condition={true}
               className={styles.secondary2Disabled}
            />
         </div>

         <User userName={'Artem Malkin'} />
      </div>
   );
}

export default App;
