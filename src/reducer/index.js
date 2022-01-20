import data from "../data/data";
import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions';

const initialState = {
    character: data,
    loading: false,
    error: '',
    more: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                character: [],
                loading: false,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                character: action.payload,
                loading: false,
                error: ''
            };
        default:
            return(state);
    }
}

export default reducer;