let initState = {
    count: 0
}
export const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + 1
            }
        default: return state
    }
}

let initState1 = {
    count: 0
}
export const reducer1 = (state = initState1, action) => {
    switch(action.type) {
        case 'ADD1':
            return {
                ...state,
                count: state.count + 1
            }
        default: return state
    }
}

let initState2 = {
    count: 0
}
export const reducer2 = (state = initState2, action) => {
    switch(action.type) {
        case 'ADD2':
            return {
                ...state,
                count: state.count + 2
            }
        default: return state
    }
}