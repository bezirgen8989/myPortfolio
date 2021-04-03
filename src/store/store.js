import abstraktsiia from '../additions/images/home_page_images/abstraktsiia-tekstura-fon-geometriia-treugolnik-foto-tekstur.jpg';
import android from '../additions/images/home_page_images/android-fon-tekstura-linii-5373.jpg';
import cwet from '../additions/images/home_page_images/cvet-forma-fon.jpg';
import derevia from '../additions/images/home_page_images/derevia-priroda-fon-3.jpg';
import dym from '../additions/images/home_page_images/dym-kluby-treugolnik.jpg';
import goryTreugolniki from '../additions/images/home_page_images/gory-treugolniki-fon.jpg';
import abstraktsiia3 from '../additions/images/home_page_images/note-7-samsung-galaxy-note-7-samsung-galaxy-abstraktsiia-a-3.jpg';
import abstraktsiia4 from '../additions/images/home_page_images/note-7-samsung-galaxy-note-7-samsung-galaxy-abstraktsiia-a-4.jpg';
import piatnaAbstraktsiiaVektor from '../additions/images/home_page_images/piatna-abstraktsiia-vektor.jpg';

//Portfolio Images
import ToDoListImage from "../additions/images/portfolioImage/ToDoList.jpg"
import Carousel from "../additions/images/portfolioImage/Carousel.jpg"

let store = {
    state: {
        activeImage: 0,
        changeActiveImage(id){
            this.activeImage = id;
        },
        images: [
            {
                imgLink: abstraktsiia,
                imgAlt:'abstraktsiia-tekstura-fon-geometriia-treugolnik-foto-tekstur.jpg',
                describeImage: 'image 1'
            },
            {
                imgLink: android,
                imgAlt:'android-fon-tekstura-linii-5373.jpg',
                describeImage: 'image 2'
            },
            {
                imgLink: cwet,
                imgAlt:'cvet-forma-fon.jpg',
                describeImage: 'image 3'
            },
            {
                imgLink: derevia,
                imgAlt:'derevia-priroda-fon-3.jpg',
                describeImage: 'image 4'
            },
            {
                imgLink: dym,
                imgAlt:'dym-kluby-treugolnik.jpg',
                describeImage: 'image 5'
            },
            {
                imgLink: goryTreugolniki,
                imgAlt:'goryTreugolniki',
                describeImage: 'image 6'
            },
            {
                imgLink: abstraktsiia3,
                imgAlt:'abstraktsiia3',
                describeImage: 'image 7'
            },
            {
                imgLink: abstraktsiia4,
                imgAlt:'abstraktsiia4',
                describeImage: 'image 8'
            },
            {
                imgLink: piatnaAbstraktsiiaVektor,
                imgAlt:'piatnaAbstraktsiiaVektor',
                describeImage: 'image 9'
            },
        ],

        portfolio: [
            {porfolioImg: ToDoListImage, porfolioLink: 'https://bezirgen8989.github.io/toDoList/#/toDoList/', portfolioAlt:'ToDoList'},
            {porfolioImg: Carousel, porfolioLink: 'https://bezirgen8989.github.io/myCarouselApp/', portfolioAlt: 'Carousel'}
        ]
    }
}

export default store;