import {ClassComponent, FunctionComponent} from './components';
import {useState} from 'react';

function App() {

    const [flag, setFlag] = useState(true);

  return (
    <div>
        {/*<div>*/}
        {/*    {flag && <ClassComponent sdsd={'My Props'}/>}*/}
        {/*</div>*/}
        {/*<button onClick={()=> setFlag(prev => !prev)}>Hide</button>*/}

        <div>
            {flag && <FunctionComponent sdsd={'My Props'}/>}
        </div>
        <button onClick={()=> setFlag(prev => !prev)}>Hide</button>
    </div>
  );
}

export default App;
