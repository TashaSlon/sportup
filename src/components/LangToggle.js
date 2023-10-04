import { useState } from 'react';
import { textRu } from '../translation/ru';
import { textEn } from '../translation/en';

export default function LangToggle(props) {
    const text = JSON.parse(localStorage.getItem('text'));

    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const popupClass = isOpenPopup ? 'lang__popup-open' : 'lang__popup';
    const langClass = isOpenPopup ? 'lang__hidden' : 'lang';

    function changeLanguage() {
        setIsOpenPopup(true);   
    }

    function chooseLanguage(e) {
        const langChoice = e.target;
        const lang = langChoice.getAttribute('lang');
        props.handleLanguage(lang);
        const text = (lang === 'RU') ? textRu : textEn;
        localStorage.setItem('text', JSON.stringify(text));
        changeLanguage();
        setIsOpenPopup(false);
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
                    <li className="lang__item" onClick={chooseLanguage} lang='RU'>
                        <div className="lang__icon-ru" lang='RU'></div>
                        <p className="lang__name" lang='RU'>Ru</p>
                        <button className="btn lang__btn" onClick={changeLanguage}></button>
                    </li>
                    <li className="lang__item" onClick={chooseLanguage} lang='EN'>
                        <div className="lang__icon-en" lang='EN'></div>
                        <p className="lang__name" lang='EN'>En</p>
                    </li>
                </ul>
            </div>
        </>
        
    );
};