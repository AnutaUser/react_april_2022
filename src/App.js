import {Comments, Posts, Users} from './components';

function App() {

  return (
    <div style={{display:'flex'}}>
      <div><Users/>
        <hr/>
        <Posts/>
      </div>
      <Comments/>
    </div>
  );
}

export default App;
