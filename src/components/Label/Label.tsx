import React, { FC } from 'react';
//@ts-ignore
import styles from './Label.module.css';
import classNames from 'classnames';
import { LabelPropsType } from './types';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';

const Label: FC<LabelPropsType> = ({ title }) => {
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.label, {
            [styles.darkTheme]: theme === Theme.Dark,
         })}
      >
         {title}
      </div>
   );
};

export default Label;
