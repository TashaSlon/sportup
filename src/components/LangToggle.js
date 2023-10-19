import { useState, useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

export default function LangToggle(props) {
    const text = useContext(TranslationContext);

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const popupClass = isOpenPopup ? 'lang__popup-open' : 'lang__popup';
    const langClass = isOpenPopup ? 'lang__hidden' : 'lang';

    function changeLanguage() {
        setIsOpenPopup(!isOpenPopup);   
    }

    function chooseLanguage(e) {
        const langChoice = e.target;
        const lang = langChoice.getAttribute('lang');
        props.handleLanguage(lang);
        changeLanguage();
    }

    return (
        <>
            <div className={langClass}>
                <div className="lang__item" onClick={changeLanguage}>
                    <div className={ text.lang === 'Ru' ? "lang__icon-ru" : "lang__icon-en" }></div>
                    <p className="lang__name">{text.lang}</p>
                    <button className="btn lang__btn"></button>
                </div>
            </div>
            <div className={popupClass}>
                <ul className="lang__popup-list">
                    <li className="lang__item" onClick={chooseLanguage} lang='ru'>
                        <div className="lang__icon-ru" lang='ru'></div>
                        <p className="lang__name" lang='ru'>Ru</p>
                        <button className="btn lang__btn" onClick={changeLanguage}></button>
                    </li>
                    <li className="lang__item" onClick={chooseLanguage} lang='en'>
                        <div className="lang__icon-en" lang='en'></div>
                        <p className="lang__name" lang='en'>En</p>
                    </li>
                </ul>
            </div>
        </>
        
    );
};