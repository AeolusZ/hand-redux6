export const createStore = (reducer, enhancer) => {
    if (enhancer && typeof enhancer === 'function') {
        return enhancer(createStore)(reducer)
    }
    // 全局状态
    let state;
    // 订阅者回调函数队列
    let listeners = [];
    // 获取全局状态
    const getState = () => {
        return state
    }
    // 注册一个回调函数
    const subscribe = (callback) => {
        listeners.push(callback); 
        return () => {
            let index = listeners.indexOf(callback);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }
    const dispatch = (action) => {
        const newState = reducer(state, action);
        state = newState
        listeners.forEach(callback => callback());
    }
    dispatch({type: 'x'})
    return {
        dispatch,
        getState,
        subscribe
    }

}

export const combineReducers = (reducerMap) => {
    const reducer = (oldState={}, action) => {
        const newState = {};
        for (let item in reducerMap) {
            let currentReducer = reducerMap[item]
            let currentNewState = currentReducer(oldState[item], action)
            newState[item] = currentNewState
        }
        return newState;
    }
    return reducer
}

export const applyMiddleware = (...middlewares) => {
    middlewares.reverse();
    const enhancer = (createStore) => {
        return (reducer) => {
            const store = createStore(reducer);
            const { dispatch } = store;
            // 处理中间件参数
            let newDispatch = dispatch;
            middlewares.map(item => {
                let func = item(store); // func 代表new dispatch生成器
                newDispatch = func(newDispatch);
            })
            return {...store, dispatch: newDispatch}
        }
    }
    return enhancer;
}