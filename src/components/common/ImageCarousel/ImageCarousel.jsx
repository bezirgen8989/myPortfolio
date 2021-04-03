import React, {useState} from 'react';
import './imageCarousel.scss';

const ImageCarousel = ({imageArr})=>{
    const [translateX, setTranslateX] = useState(0);
    const rightSide = ()=>{
        translateX === ((imageArr.length-1) * -100)
            ? setTranslateX((imageArr.length-1) * -100)
            : setTranslateX(prevState => prevState + -100);
    }
    const leftSide = ()=>{
        translateX === 0
            ? setTranslateX(0)
            : setTranslateX(prevState => prevState - -100);
    }

    return(
        <div className={'ImageBox'}>
            <button className={'ImageBox__btnLeft'} onClick={leftSide}> &lt; </button>
            <button className={'ImageBox__btnRight'} onClick={rightSide}> &gt; </button>
            {imageArr.map((image, id) => {
                return(
                    <img
                        key={id}
                        src={image.imgLink}
                        alt={image.imgAlt}
                        style={{transform:`translateX(${translateX}%)`}}
                    />
                )
            })}
        </div>
    )
}

export default ImageCarousel;