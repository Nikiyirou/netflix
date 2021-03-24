import data from './data.json';

const initialStage = {
    mylist: data.mylist,
    recommendations: data.recommendations
}



const RecommendationsReducer = (state = initialStage, action) => {
    if (action.type === 'removeList') {
        return {
            ...state,
            mylist: state.recommendations.filter((id) => id !== action.payload),
            recommendations:
                (() => {
                    state.recommendations.push(action.item);
                    return state.recommendations;
                })()
        }
    }

    return state;
}

export default RecommendationsReducer;
