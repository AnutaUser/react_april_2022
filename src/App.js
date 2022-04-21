import {useReducer, useState} from 'react';

const reducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'addCat':
      return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
    case 'deleteCat':
      return {...state, cats: state.cats.filter(cat => cat.id !== payload)};

    case 'addDog':
      return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
    case 'deleteDog':
      return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
  }

};

function App() {

  const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]});

  const [cat, setCat] = useState('');
  const [dog, setDog] = useState('');

  // const createCat = () => {
  //   dispatch({type: 'addCat', payload: cat});
  //   setCat('');
  // };
  //
  // const createDog = () => {
  //   dispatch({type: 'addDog', payload: dog});
  //   setDog('');
  // };

  const settler = (type, payload, setEmpty) => {
    dispatch({type, payload});
    setEmpty('');
  };

  return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>

          <div style={{marginRight: '10px'}}>
            <label>Add cat: <input type="text" onChange={({target}) => setCat(target.value)} value={cat}
                                   placeholder={'cat'}></input></label>
            {/*<button onClick={() => createCat()}>Save</button>*/}
            <button onClick={() => settler('addCat', cat, setCat)}>Save</button>
          </div>

          <div>
            <label>Add dog: <input type="text" onChange={({target}) => setDog(target.value)} value={dog}
                                   placeholder={'dog'}></input></label>
            {/*<button onClick={() => createDog()}>Save</button>*/}
            <button onClick={() => settler('addDog', dog, setDog)}>Save</button>
          </div>

        </div>

        <hr/>

        <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{marginRight:'10px'}}>
            {
              state.cats.map(cat =>
                  <div key={cat.id}>
                    {cat.name}
                    <button onClick={() => dispatch({type:'deleteCat', payload: cat.id})}>Delete</button>
                  </div>)
            }
          </div>

          <div>
            {
              state.dogs.map(dog =>
                  <div key={dog.id}>
                    {dog.name}
                    <button onClick={() => dispatch({type:'deleteDog', payload: dog.id})}>Delete</button>
                  </div>)
            }
          </div>
        </div>

      </div>
  );
}

export default App;
