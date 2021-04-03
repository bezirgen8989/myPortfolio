import images from "../imagesImort";

const CHANGE_ACTIVE_IMAGE = 'CHANGE_ACTIVE_IMAGE';

let initState = {
    activeImage: 0,
    images
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_IMAGE:
            // console.log('from action creator ' + action.id);
            state.activeImage = action.id;
            return state;
        default:
            return state;

    }
}


export const changeActiveImageAC = (id)=>{
    return {type: CHANGE_ACTIVE_IMAGE, id}
}

export default homeReducer;