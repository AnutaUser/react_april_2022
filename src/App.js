import {Route, Routes} from 'react-router-dom';

import {Layout} from './layouts/Layout';
import {
    CommentsPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UsersPage
} from './pages';
import {RequireAuth} from './hoc';

function App() {

    return (
        <Routes>

            <Route path={'/'} element={<Layout/>}>

                <Route path={'/'} element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':userId'} element={
                        <RequireAuth>
                            <UserDetailsPage/>
                        </RequireAuth>
                    }>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>

        </Routes>
    );
}

export default App;
