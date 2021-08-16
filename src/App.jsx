import { useEffect, useState } from "react";
import { store } from './redux/store';
function App () {
    const [count, setCount] = useState('');
    const add = () => {
        store.dispatch({type: 'ADD'});
    }
    useEffect(() => {
        updateCount();
        // 监听
        store.subscribe(() => {
            updateCount();
        })
    }, [])
    const updateCount = () => {
        const state = store.getState();
        const { count } = state;
        setCount(count);
    }
    return (<div>
        <div>
            <span>state 的值是：</span>
            <span>{count}</span>
        </div>
        <div>
            <button onClick={add}>+1</button>
        </div>
    </div>)
}
export default App;