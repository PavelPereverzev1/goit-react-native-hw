export const getPostsList = state => state.posts.items;

export const getIsLoading = state => state.posts.isLoading;

export const getComments = (state, id) => state.posts.items;
