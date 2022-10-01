import React from 'react';
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate,
   NavLink,
} from 'react-router-dom';

import Blog from '../Blog';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Search from '../Search';
import PostPage from '../PostPage';
import PagesWraper from '../PagesWraper';

export enum PathNames {
   Home = '/',
   SignIn = '/sign-in',
   SignUp = '/sign-up',
   Search = '/search',
   PostPage = '/content',
}

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={PathNames.Home} element={<PagesWraper />}>
               <Route path={PathNames.SignIn} element={<SignIn />} />
               <Route path={PathNames.SignUp} element={<SignUp />} />
               <Route path={PathNames.Search} element={<Search />} />
               <Route path={PathNames.PostPage} element={<PostPage />} />
            </Route>
            <Route path={'*'} element={<Navigate to={PathNames.SignIn} />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
