
const todo=[]
export const TodoReducer =(state=todo,action)=>{
    switch (action.type) {
        case "ADD":{
            return[...state,action.payload];
        }
        case "REMOVE":{
            return state.filter((i)=>i.index!==action.index);
        }
        default:return state;

    }
}