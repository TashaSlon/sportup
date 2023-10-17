import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

import Step1 from '../images/deleteAccount1.jpg';
import Step2 from '../images/deleteAccount2.jpg';
import Step3 from '../images/deleteAccount3.jpg';
import Step4 from '../images/deleteAccount4.jpg';

export default function Gallery() {
    const text = useContext(TranslationContext);
    const activeImage = document.querySelector(".gallery__active");
    console.log(activeImage);
    const productImages = document.querySelectorAll(".gallery__figure");

    function changeImage(e) {
        const img = e.target.previousSibling;
        console.log(e.target.previousSibling.src);
        console.log(img);
        console.log(activeImage);
        activeImage.src = img.src;
    }

    productImages.forEach(image => image.addEventListener("click", changeImage));

    return (
        <div className="gallery">
            <img className="gallery__active gallery__image" src={Step2} alt={text.deleteAccountImage1}/>
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