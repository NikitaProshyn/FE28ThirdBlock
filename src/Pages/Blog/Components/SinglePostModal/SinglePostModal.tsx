import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardSize } from '../../../../components/СardList/CardList';
import Card from '../../../../components/card/Card';
import ModalWindow from '../../../../components/ModalWindow';
import {
   setSelectedPost,
   setSinglePostModalVisible,
} from '../../../../Redux/reducers/postsReducers';
import postsSelectors from '../../../../Redux/selectors/postsSelectors';
import card from '../../../../components/card';

const SingePostModal = () => {
   const card = useSelector(postsSelectors.getSelectedPost);

   const isVisible = useSelector(postsSelectors.getIsImgVisible);

   const dispatch = useDispatch();

   const onClose = (event: any) => {
      event.stopPropagation();
      dispatch(setSinglePostModalVisible(!isVisible));
      dispatch(setSelectedPost(null));
   };

   return card ? (
      <ModalWindow active={isVisible} closeModal={onClose}>
         <Card size={CardSize.Large} card={card} />
      </ModalWindow>
   ) : null;
};

export default SingePostModal;
