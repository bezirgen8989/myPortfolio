import React from 'react';
import './ImageGallery.scss';

const ImageGallery = (props) => {

    return (
        <div className={'ImageGalleryBlock'}>
            <div className={'ImageGalleryBlock__mainImage'}>
                <img src={props.mainImage} alt={props.mainImageAlt} />
                <div className={'ImageGalleryBlock__textBlock'}>
                    {props.describeImage}
                </div>
            </div>
            {
                props.imageArr.map((image, id) => {
                    let checkId = () => {
                        props.changeMainImage(id)
                    }
                    const images = image.imgLink
                    const imagesAlt = image.imgAlt
                    return (
                        <div className={'ImageGalleryBlock__anotherImages'}
                             onClick={checkId}
                             key={id + imagesAlt}>
                            <img src={images} alt={imagesAlt}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGallery;