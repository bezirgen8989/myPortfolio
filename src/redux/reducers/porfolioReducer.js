import ToDoListImage from "../../additions/images/portfolioImage/ToDoList.jpg";
import Carousel from "../../additions/images/portfolioImage/Carousel.jpg";

const initState = {
    portfolio: [
        {
            porfolioImg: ToDoListImage,
            porfolioLink: 'https://bezirgen8989.github.io/toDoList/#/toDoList/',
            portfolioAlt: 'ToDoList'
        },
        {porfolioImg: Carousel, porfolioLink: 'https://bezirgen8989.github.io/myCarouselApp/', portfolioAlt: 'Carousel'}
    ]
}

const portfolioReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default portfolioReducer;