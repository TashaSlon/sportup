import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

export default function LangToggle(props) {
    const text = useContext(TranslationContext);

    function chooseLanguage(e) {
        const langChoice = e.target;
        const lang = langChoice.getAttribute('lang');
        props.handleLanguage(lang);
    }

    return (
        <>
            <div className="lang">
                <div className="lang__block"> 
                    <div className={ text.lang === 'Ru' ? "lang__icon-ru" : "lang__icon-en" }></div>
                    <p className="lang__name">{text.lang}</p>
                    <button className="btn lang__btn"></button>
                    <ul className="lang__popup-list">
                        <li className="lang__item" onClick={chooseLanguage} lang='ru'>
                            <div className="lang__icon-ru" lang='ru'></div>
                            <p className="lang__name" lang='ru'>Ru</p>
                            <button className="btn lang__btn" onClick={chooseLanguage} lang='ru'></button>
                        </li>
                        <li className="lang__item" onClick={chooseLanguage} lang='en'>
                            <div className="lang__icon-en" lang='en'></div>
                            <p className="lang__name" lang='en'>En</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    );
};