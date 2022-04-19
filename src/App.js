import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';
import {PostCommentsPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from './pages';

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>

          <Route index element={<Navigate to={'home'}/>}/>

          <Route path={'home'} element={<HomePage/>}/>

          <Route path={'users'} element={<UsersPage/>}>
              <Route path={':userId'} element={<UserDetailsPage/>}>
                  <Route path={'posts'} element={<PostsPage/>}/>
              </Route>
          </Route>

          <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':id'} element={<PostDetailsPage/>}>
                  <Route path={'comments'} element={<PostCommentsPage/>}/>
              </Route>
          </Route>

          <Route path={'*'} element={<NotFoundPage/>}/>

      </Route>

    </Routes>
  );
}

export default App;
