import { useContext, useState } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

import Step1 from '../images/deleteAccount1.jpg';
import Step2 from '../images/deleteAccount2.jpg';
import Step3 from '../images/deleteAccount3.jpg';
import Step4 from '../images/deleteAccount4.jpg';

export default function Gallery() {
    const text = useContext(TranslationContext);

    const [src, setSrc] = useState(Step1);
    const [altImage, setAltImage] = useState(text.deleteAccountImage1);

    const productImages = document.querySelectorAll(".gallery__figure");

    function changeImage(e) {
        setSrc(e.target.previousSibling.src);
        setAltImage(e.target.previousSibling.alt);
    }

    productImages.forEach(image => image.addEventListener("click", changeImage));

    return (
        <div className="gallery">
            <img className="gallery__active gallery__image" src={src} alt={altImage}/>
            <ul className="gallery__image-list">
                <li className="gallery__image-item">
                    <figure className="gallery__figure" onClick={changeImage}>
                        <img className="gallery__image gallery__inactive" src={Step1} alt={text.deleteAccountImage1}/>
                        <figcaption className="gallery__figcaption">{text.deleteAccountImage1}</figcaption>
                    </figure>
                </li>
                <li className="gallery__image-item">
                    <figure className="gallery__figure" onClick={changeImage}>
                        <img className="gallery__image gallery__inactive" src={Step2} alt={text.deleteAccountImage2}/>
                        <figcaption className="gallery__figcaption">{text.deleteAccountImage2}</figcaption>
                    </figure>
                </li>
                <li className="gallery__image-item">
                    <figure className="gallery__figure" onClick={changeImage}>
                        <img className="gallery__image gallery__inactive" src={Step3} alt={text.deleteAccountImage3}/>
                        <figcaption className="gallery__figcaption">{text.deleteAccountImage3}</figcaption>
                    </figure>
                </li>
                <li className="gallery__image-item">
                    <figure className="gallery__figure" onClick={changeImage}>
                        <img className="gallery__image gallery__inactive" src={Step4} alt={text.deleteAccountImage3}/>
                        <figcaption className="gallery__figcaption">{text.deleteAccountImage3}</figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
};