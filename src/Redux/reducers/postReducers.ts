import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
   CardListType,
   CardPostType,
   LikeStatus,
   TabsNames,
} from '../../Utils/GlobaTypes';

type PostStateType = {
   selectedPost: CardPostType | null;
   activeTab: TabsNames;
   cardsList: CardListType;
   favouritePostsList: CardListType;
};

const INITIAL_STATE: PostStateType = {
   selectedPost: null,
   activeTab: TabsNames.All,
   cardsList: [],
   favouritePostsList: [],
};

const postsReducer = createSlice({
   name: 'posts',
   initialState: INITIAL_STATE,
   reducers: {
      setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
         state.selectedPost = action.payload;
      },
      setActiveTab: (state, action: PayloadAction<TabsNames>) => {
         state.activeTab = action.payload;
      },
      setCardsList: (state, action: PayloadAction<CardListType>) => {
         state.cardsList = action.payload.map((card) => {
            return {
               ...card,
               likeStatus: null,
            };
         });
      },
      setFavouritePost: (state, action: PayloadAction<CardPostType>) => {
         const { id } = action.payload;
         const postIndex = state.favouritePostsList.findIndex(
            (post) => post.id === id
         );
         if (postIndex === -1) {
            state.favouritePostsList.push(action.payload);
         } else {
            state.favouritePostsList.splice(postIndex, 1);
         }
      },
      setLikeStatus: (
         state,
         action: PayloadAction<{ status: LikeStatus; id: number }>
      ) => {
         const post = state.cardsList.find(
            (val) => val.id === action.payload.id
         );
         const postIndex = state.cardsList.findIndex(
            (val) => val.id === action.payload.id
         );
         if (post && postIndex !== -1) {
            if (post.likeStatus === action.payload.status) {
               state.cardsList.splice(postIndex, 1, {
                  ...post,
                  likeStatus: null,
               });
            } else {
               state.cardsList.splice(postIndex, 1, {
                  ...post,
                  likeStatus: action.payload.status,
               });
            }
         }
      },
   },
});

export default postsReducer.reducer;

export const {
   setSelectedPost,
   setActiveTab,
   setCardsList,
   setFavouritePost,
   setLikeStatus,
} = postsReducer.actions;
