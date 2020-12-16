const Todo = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
           return [...state,{ 'todo': action.payload }] ;
        default:
            return state;
    }
}

export default Todo

