import { create } from 'apisauce';
import { ActivationParams, UserActionPayload } from '../../Utils/GlobaTypes';

const API = create({
   baseURL: 'https://studapi.teachmeskills.by',
});

const createNewUser = (userData: UserActionPayload) => {
   return API.post('/auth/users/', userData);
};

const getPostsList = () => {
   return API.get('/blog/posts/?limit=11');
};

const activateNewUser = (params: ActivationParams) => {
   return API.post('/auth/users/activation/', params);
};

const getPost = (id: string) => {
   return API.get(`/blog/posts/${id}/`);
};

export default { createNewUser, getPostsList, getPost, activateNewUser };
