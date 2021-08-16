const reduxThunk = (store) => {
    return (dispatch) => {
        return (action) => {
            if (typeof action === 'function') {
                action(dispatch);
            } else {
                dispatch(action);
            }
        }
    }
}
export default reduxThunk;