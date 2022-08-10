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

function App() {
   return (
      <div className={styles.app}>
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
   );
}

export default App;
