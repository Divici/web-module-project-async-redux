import data from "../data/data";

const initialState = {
    character: data,
    loading: false,
    error: '',
    more: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return(state);
    }
}

export default reducer;