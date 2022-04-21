import {useReducer} from 'react';

const init = (initCount) => {
  return {count1: initCount, count2: initCount + 10, count3: initCount + 100};
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc1':
      return {...state, count1: state.count1 + 1}
    case 'dec1':
      return {...state, count1: state.count1 - 1}
    case 'reset1':
      return {...state, count1: 0}

    case 'inc2':
      return {...state, count2: state.count2 + 1}
    case 'dec2':
      return {...state, count2: state.count2 - 1}
    case 'reset2':
      return {...state, count2: 10}

    case 'inc3':
      return {...state, count3: state.count3 + 1}
    case 'dec3':
      return {...state, count3: state.count3 - 1}
    case 'reset3':
      return {...state, count3: 100}
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      <div>
        {state.count1}
        <button onClick={() => dispatch({type:'inc1'})}>inc</button>
        <button onClick={() => dispatch({type:'dec1'})}>dec</button>
        <button onClick={() => dispatch({type:'reset1'})}>reset</button>
      </div>
      <div>
        {state.count2}
        <button onClick={() => dispatch({type:'inc2'})}>inc</button>
        <button onClick={() => dispatch({type:'dec2'})}>dec</button>
        <button onClick={() => dispatch({type:'reset2'})}>reset</button>
      </div>
      <div>
        {state.count3}
        <button onClick={() => dispatch({type:'inc3'})}>inc</button>
        <button onClick={() => dispatch({type:'dec3'})}>dec</button>
        <button onClick={() => dispatch({type:'reset3'})}>reset</button>
      </div>
    </div>
  );
}

export default App;
