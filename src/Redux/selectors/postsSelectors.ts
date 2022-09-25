export default {
   getSelectedPost: (state: any) => state.postReducers.selectedPost,
   getActiveTab: (state: any) => state.postReducers.activeTab,
   getCardsList: (state: any) => state.postReducers.cardsList,
   getFavoritePosts: (state: any) => state.postReducers.favouritePostsList,
   getSelectedImgPost: (state: any) => state.postReducers.selectedImgPost,
   getIsModalVisible: (state: any) => state.postReducers.singlePostModalVisible,
   getIsImgVisible: (state: any) => state.postReducers.singleImgModalVisible,
};
