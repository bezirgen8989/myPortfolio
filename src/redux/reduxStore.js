import {combineReducers, createStore} from "redux";
import homeReducer from "./reducers/homeReducer";
import portfolioReducer from "./reducers/porfolioReducer";
import resumeReducer from "./reducers/resumeReduser";

let reduxStore = createStore(
    combineReducers({
        homePageData: homeReducer,
        resumePageData: resumeReducer,
        portfolioPageData: portfolioReducer
}));


export default reduxStore;