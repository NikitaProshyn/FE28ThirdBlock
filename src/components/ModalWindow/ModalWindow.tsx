import React, { FC } from 'react';
//@ts-ignore
import styles from './ModalWindow.module.css';
import classNames from 'classnames';

import { useSelector } from 'react-redux';
import postsSelectors from '../../Redux/selectors/postsSelectors';
import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { ModalWindowPropsType } from '../../Utils/GlobaTypes';

const ModalWindow: FC<ModalWindowPropsType> = ({
   active,
   closeModal,
   children,
   cardModalVisible,
   imgModalVisible,
}) => {
   const { theme } = useThemeContext();

   return (
      <div
         className={classNames(styles.modalPost, {
            [styles.modalActive]: active,
            [styles.darkTheme]: theme === Theme.Dark,
         })}
         onClick={closeModal}
      >
         <div
            className={classNames({
               [styles.modalContent]: cardModalVisible,
               [styles.modalContentImg]: imgModalVisible,
            })}
         >
            {children}
         </div>
      </div>
   );
};

export default ModalWindow;
