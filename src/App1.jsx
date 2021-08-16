import { useEffect, useState } from "react";
import { store } from './redux/store';
function App1 () {
    const [state1, setState1] = useState({});
    const [state2, setState2] = useState({});
    const add1 = () => {
        store.dispatch({type: 'ADD1'})
    }
    const asyncAdd1 = () => {
        store.dispatch((dispatch) => {
            setTimeout(() => {
                dispatch({type: 'ADD1'})
            }, 1000)
        })
    }
    const add2 = () => {
        store.dispatch({type: 'ADD2'})
    }
    useEffect(() => {
        updateState();
        store.subscribe(() => {
            updateState();
        })
    })
    const updateState = () => {
        const state = store.getState();
        console.log(state)
        const { state1, state2 } = state;
        setState1(state1);
        setState2(state2)
    }
    return (<div>
        <div>
            <span>state2 的值是：</span>
            <span>{state1.count}</span>
        </div>
        <div>
            <button onClick={add1}>+1</button>
            <button onClick={asyncAdd1}>异步+1</button>
        </div>
        <div>
            <span>state2 的值是：</span>
            <span>{state2.count}</span>
        </div>
        <div>
            <button onClick={add2}>+2</button>
        </div>
    </div>)
}
export default App1;