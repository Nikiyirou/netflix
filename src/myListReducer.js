import data from './data.json';

const initialStage = {
    mylist: data.mylist,
    recommendations: data.recommendations
}

const MyListReducer = (state = initialStage, action) => {
    if (action.type === 'addList') {

        return {
            ...state,
            mylist: (() => {
                state.mylist.push(action.item);
                return state.mylist
            })(),
            recommendations:
                state.recommendations.filter((id) => id !== action.payload)
        }
    }
    return state;
}

export default MyListReducer;
