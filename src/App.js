import {Cars, Form} from './components';
import {useState} from 'react';

function App() {

    const [newCar, setNewCar] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

    return (
        <div>
            <Form setNewCar={setNewCar} updateCar={updateCar}/>
            <hr/>
            <Cars newCar={newCar} setUpdateCar={setUpdateCar}/>
        </div>
    );
}

export default App;
