import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import styles from './Blog.module.css';
import classNames from 'classnames';

import CardList from '../../components/СardList/';
import Title from '../../components/Title';
import Tabs from '../../components/tabs';
import { TabsNames } from '../../Utils/GlobaTypes';

import {
   setActiveTab,
   setCardsList,
   getPosts,
} from '../../Redux/reducers/postsReducers';
import PostsSelectors from '../../Redux/selectors/postsSelectors';
import SingeImgModal from './Components/SingeImgModal';
import SingePostModal from './Components/SinglePostModal/SinglePostModal';

const TABS_NAME = [
   {
      key: TabsNames.All,
      title: 'All',
   },
   {
      key: TabsNames.Favorites,
      title: 'My favorites',
   },
   {
      key: TabsNames.Popular,
      title: 'Popular',
   },
];

const Blog = () => {
   const activeTab = useSelector(PostsSelectors.getActiveTab);
   const cardsList = useSelector(PostsSelectors.getCardsList);

   const dispatch = useDispatch();

   const onTabClick = (id: TabsNames) => {
      dispatch(setActiveTab(id));
   };

   useEffect(() => {
      dispatch(getPosts());
   }, []);

   return (
      <div className={classNames(styles.blogConainer)}>
         <Title title={'Blog'} />
         <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab} />
         <CardList cardList={cardsList} />
         <SingePostModal />
         <SingeImgModal />
      </div>
   );
};

export default Blog;
