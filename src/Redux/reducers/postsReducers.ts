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
   selectedImgPost: CardPostType | null;
   singlePostModalVisible: boolean;
   singleImgModalVisible: boolean;
   singlePost: CardPostType | null;
   isPostLoading: boolean;
};

const INITIAL_STATE: PostStateType = {
   selectedPost: null,
   activeTab: TabsNames.All,
   cardsList: [],
   favouritePostsList: [],
   selectedImgPost: null,
   singlePostModalVisible: false,
   singleImgModalVisible: false,
   singlePost: null,
   isPostLoading: false,
};

const postsReducer = createSlice({
   name: 'posts',
   initialState: INITIAL_STATE,
   reducers: {
      getSinglePost: (state, action: PayloadAction<string>) => {},
      setSinglePost: (state, action: PayloadAction<CardPostType>) => {
         state.singlePost = action.payload;
      },
      setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
         state.isPostLoading = action.payload;
      },
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
      getPosts: (state, action: PayloadAction<undefined>) => {},
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
         const card = state.cardsList.find(
            (val) => val.id === action.payload.id
         );
         const postIndex = state.cardsList.findIndex(
            (val) => val.id === action.payload.id
         );
         if (card && postIndex !== -1) {
            if (card.likeStatus === action.payload.status) {
               state.cardsList.splice(postIndex, 1, {
                  ...card,
                  likeStatus: null,
               });
            } else {
               state.cardsList.splice(postIndex, 1, {
                  ...card,
                  likeStatus: action.payload.status,
               });
            }
         }
      },
      setSinglePostModalVisible: (state, action: PayloadAction<boolean>) => {
         state.singlePostModalVisible = action.payload;
      },
      setSelectedImgPost: (
         state,
         action: PayloadAction<CardPostType | null>
      ) => {
         state.selectedImgPost = action.payload;
      },
      setSingleImgModalVisible: (state, action: PayloadAction<boolean>) => {
         state.singleImgModalVisible = action.payload;
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
   setSingleImgModalVisible,
   setSelectedImgPost,
   setSinglePostModalVisible,
   getPosts,
   getSinglePost,
   setSinglePost,
   setSinglePostLoading,
} = postsReducer.actions;
