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
   return <p>{userName}</p>;
};

const Title = ({ title, className }: any) => {
   return <h2 className={className}>{title}</h2>;
};

const Tabs = ({ title, className }: any) => {
   return <p className={`${styles.tab} ${className || ''}`}>{title}</p>;
};

function App() {
   return (
      <div className={styles.app}>
         <div className={styles.buttons_wrap}>
            <div className={styles.primary_wrap}>
               <Button
                  title={'Primary'}
                  click={() => alert('Hello from Primary')}
                  className={styles.primary}
               />

               <Button title={'Primary'} condition={true} />
            </div>
            <div className={styles.secondary_wrap}>
               <Button
                  title={'Secondary'}
                  click={() => alert('Hello from Secondary')}
                  className={styles.secondary}
               />

               <Button title={'Secondary'} condition={true} />
            </div>
            <div className={styles.secondary2_wrap}>
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
         </div>
         <div className={styles.user}>
            <User userName={'Artem Malkin'} />
         </div>
         <div className={styles.title_wrap}>
            <Title title={'Sign In'} className={styles.title} />
         </div>

         <div className={styles.tabs_wrap}>
            <Tabs title={'All'} className={styles.all} />
            <Tabs title={'My Favorites'} className={styles.favorite} />
            <Tabs title={'Popular'} className={styles.popular} />
         </div>
      </div>
   );
}

export default App;
