import {Component} from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 25
        };
        console.log('constructor');
    }

    inc () {
      this.setState(prev => ({a: prev.a + 1}))
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.a ===5) {
           return 'Snapshot !!!!!!!!!!!!'
        }
        return null;
    };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('componentDidUpdate');
    //     console.log('prevProps:', prevProps);
    //     console.log('prevState:', prevState);
    //     console.log('snapshot:', snapshot);
    // }
    componentWillUnmount() {
        console.log('componentDidMount');
    };

    render() {
        console.log('render');
        return (
            <h1>
                Hello from Class Components !!!!!!!
                <div>A: {this.props.sdsd}</div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <button onClick={()=> this.inc()}>inc</button>
            </h1>
        );
    }
}

export {ClassComponent};
