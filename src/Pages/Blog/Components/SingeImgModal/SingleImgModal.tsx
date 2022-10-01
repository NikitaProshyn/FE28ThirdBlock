import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import postsSelectors from '../../../../Redux/selectors/postsSelectors';
import {
   setSelectedImgPost,
   setSingleImgModalVisible,
} from '../../../../Redux/reducers/postsReducers';
import ModalWindow from '../../../../components/ModalWindow';

const SingleImgModal = () => {
   const imgModalVisible = useSelector(postsSelectors.getIsImgVisible);

   const card = useSelector(postsSelectors.getSelectedImgPost);

   const isVisible = useSelector(postsSelectors.getIsImgVisible);

   const dispatch = useDispatch();

   const onClose = () => {
      dispatch(setSingleImgModalVisible(!isVisible));
      dispatch(setSelectedImgPost(null));
   };

   return card ? (
      <ModalWindow
         active={isVisible}
         closeModal={onClose}
         imgModalVisible={imgModalVisible}
      >
         <img src={card.image} alt="img" />
      </ModalWindow>
   ) : null;
};

export default SingleImgModal;
