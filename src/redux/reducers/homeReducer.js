import images from "../imagesImort";

const CHANGE_ACTIVE_IMAGE = 'CHANGE_ACTIVE_IMAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initState = {
    activeImage: 0,
    images,
    isLoading: false
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_IMAGE:
            // console.log('from action creator ' + action.id);
            state.activeImage = action.id;
            return state;
        case TOGGLE_IS_FETCHING:
            return {...state, isLoading: action.isLoading}
        default:
            return state;

    }
}


export const changeActiveImageAC = (id)=>{
    return {type: CHANGE_ACTIVE_IMAGE, id}
}

export const toggleIsLoading = (isLoading)=>{
    return {type: TOGGLE_IS_FETCHING, isLoading}
}

export default homeReducer;