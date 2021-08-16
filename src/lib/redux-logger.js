const reduxLogger = (store) => {
    return (dispatch) => {
        return (action) => {
            console.log('preState', store.getState());
            console.log('logger', action.type);
            dispatch(action);
            console.log('nextState', store.getState());
        }
    }
}
export default reduxLogger;