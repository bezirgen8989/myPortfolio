import React, {useState, useEffect} from 'react';
import './home.scss';
import ImageGallery from "../../common/ImageGalery/ImageGalety";
import {changeActiveImageAC} from "../../../redux/reducers/homeReducer";

const Home = (props) => {
    const [imageId, setImageId] = useState(props.homePageData.activeImage);

    useEffect(() => {
        setImageId(props.homePageData.activeImage)
    }, [props.homePageData.activeImage])

    const changeMainImage = (id) => {
        props.reduxStore.dispatch(changeActiveImageAC(id))
        setImageId(id);
    }
    return (
        <div className={'HomeBox'}>
            <div className={"ImageBlock"}>
                <ImageGallery
                    changeMainImage={changeMainImage}
                    mainImage={props.homePageData.images[imageId].imgLink}
                    mainImageAlt={props.homePageData.images[imageId].imgAlt}
                    describeImage={props.homePageData.images[imageId].describeImage}
                    imageArr={props.homePageData.images}
                />
            </div>
        </div>
    )
}

export default Home;