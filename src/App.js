import {Route, Routes} from 'react-router-dom';

import {Layout} from './layouts/Layout';
import {HomePage, NotFoundPage, PostsPage, UserDetailsPage, UsersPage} from './pages';

function App() {

    return (
        <Routes>

            <Route path={'/'} element={<Layout/>}>

                <Route path={'/'} element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>

        </Routes>
    );
}

export default App;
