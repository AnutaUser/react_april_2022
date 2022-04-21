import {useReducer} from 'react';

const init = (initCount) => {
  return {count1: initCount, count2: initCount};
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {...state, count1: state.count1 + 1};
    case 'dec':
      return {...state, count1: state.count1 - 1};
    case 'reset':
      return {...state, count1: 0};
    case 'set':
      return {...state, count1:action.payload}
  }
};

function App() {

  const [state, dispatch] = useReducer (reducer, 0, init);

  // const inc = () => {
  //   dispatch({type: 'inc'});
  // };
  //
  // const dec = () => {
  //   dispatch({type: 'dec'});
  // };
  //
  // const reset = () => {
  //   dispatch({type: 'reset'})
  // };

  return (
      <div>
        {state.count1}

        {/*<button onClick={() => inc()}>inc</button>*/}
        {/*<button onClick={() => dec()}>dec</button>*/}
        {/*<button onClick={() => reset()}>reset</button>*/}

        <button onClick={() => dispatch({type: 'inc'})}>inc</button>
        <button onClick={() => dispatch({type: 'dec'})}>dec</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <button onClick={() => dispatch({type: 'set', payload:10})}>setTo10</button>

      </div>
  );
}

export default App;
