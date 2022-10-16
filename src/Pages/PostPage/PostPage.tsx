import React, { useEffect, useRef } from 'react';
//@ts-ignore
import styles from './PostPage.module.css';
import classNames from 'classnames';

import Post from '../../components/Post';

import { useThemeContext, Theme } from '../../Context/ThemeContext/Context';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePost } from '../../Redux/reducers/postsReducers';
import PostsSelectors from '../../Redux/selectors/postsSelectors';
import LoadngScreen from './Components/LoadingScreen';

const PostPage = () => {
   const params = useParams();

   const dispatch = useDispatch();

   const post = useSelector(PostsSelectors.getSinglePost);
   const isLoading = useSelector(PostsSelectors.getSinglePostLoading);

   const { id } = params;

   useEffect(() => {
      if (id) {
         dispatch(getSinglePost(id));
      }
   }, [id]);

   return !isLoading && post ? <Post post={post} /> : <LoadngScreen />;
};

export default PostPage;
