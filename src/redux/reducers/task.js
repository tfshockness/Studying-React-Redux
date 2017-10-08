//Action reducers
const taskDefaultState = [];

export const taskReducer = (state = taskDefaultState, action) => {
    switch(action.type)
    {
        case 'ADD_TASK':
            return state.concat(action.task);
        default:
            return state;
    }
}