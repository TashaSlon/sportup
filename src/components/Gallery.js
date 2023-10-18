import { useContext, useState } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

import Step1 from '../images/deleteAccount1.jpg';
import Step2 from '../images/deleteAccount2.jpg';
import Step3 from '../images/deleteAccount3.jpg';
import Step4 from '../images/deleteAccount4.jpg';
import Video from '../images/deleteAccountVideo.gif';

export default function Gallery() {
    const text = useContext(TranslationContext);

    const images = [Step1, Step2, Step3, Step4, Video]
    const names = [text.deleteAccountImage1, text.deleteAccountImage2, text.deleteAccountImage3, text.deleteAccountImage3, text.deleteAccountVideo ];

    const [count, setCount] = useState(0);

    function handleLeft() {
        setCount(count - 1);
    }

    function handleRight() {
        setCount(count + 1);
    }

    return (
        <div className="gallery">
            <div className='gallery__count'>{count + 1} из {images.length}</div>
            <div className={count === 0 ? 'gallery__disable' : 'gallery__left'} onClick={handleLeft}></div>
            <div className={count === (images.length - 1)  ? 'gallery__disable' : 'gallery__right'} onClick={handleRight}></div>
            <img className='gallery__image' src={images[count]} alt={names[count]} />
        </div>
    );
};