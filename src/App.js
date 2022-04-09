import {useState} from 'react';

import {Posts, SingleUser, Users} from './components';
import css from './App.module.css';

function App() {

    const [singleUser, setSingleUser] = useState(null);
    const [postsById, setPostsById] = useState(null);

    return (
        <div>
            <div className={css.App}>
                <Users setSingleUser={setSingleUser} setPostsById={setPostsById}/>
                {singleUser && <SingleUser singleUser={singleUser} setSingleUser={setSingleUser} setPostsById={setPostsById}/>}
            </div>
            {postsById && <Posts userId={postsById}/>}
        </div>
    );
}

export default App;
