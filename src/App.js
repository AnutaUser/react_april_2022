import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';
import {CommentsPage, HomePage, NotFoundPage, PostDetailsPage, PostsPage, SingleUserPage, UsersPage} from './pages';

function App() {

    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}/>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>
                </Route>

                <Route path={'comments'} element={<CommentsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>

        </Routes>
    );
}

export default App;
