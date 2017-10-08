//Actions Creators 
export const addTask = ({description='', category='' }) => {
    return {
        type: 'ADD_TASK',
        task: {
            id: Date.now(),
            complete: false,
            description,
            category
        }
    }
};

