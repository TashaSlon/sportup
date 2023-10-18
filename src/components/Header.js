import logo from '../images/logo.svg';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import LangToggle from './LangToggle';
import { TranslationContext, translations } from '../contexts/translation/translationContext';

export default function Header(props) {
    const text = useContext(TranslationContext);
    const mainClass = props.type === 'document' ? 'header__hidden' : 'header__text-block';
    const docClass = props.type === 'document' ? 'header__doc-block' : 'header__hidden';

    return (
        <header className={ props.type==='document'?"header__back-document":"header__back" }>
            <div className='header'>
                <div className='header__top'>
                    <div className='header__logo-block'>
                        <button className='btn btn__menu' onClick={props.onOpenMenu}></button>
                        <Link to="/" className='links'><img src={logo} className="logo" alt="SportUp" /></Link>
                    </div>
                    <nav>
                        <ul className="menu menu__top">
                            <li>
                                <Link to="/" className='links menu__item'>{text.service}</Link></li>
                            {/*<li>Тарифы</li>*/}
                            <li>
                                <Link to="/terms-conditions" className='links menu__item'>Terms-Conditions</Link></li>
                            <li>
                                <Link to="/privacy-policy" className='links menu__item'>Privacy-policy</Link></li>
                            <li>
                                <Link to="/delete-account" className='links menu__item'>{text.deleteAccountMenu}</Link></li>
                        </ul>
                    </nav>
                    <LangToggle handleLanguage={props.handleLanguage}/>
                </div>
                <div className='header__banner'>
                    <div className={mainClass}>
                        <h1 className='header__title'>{text.title}</h1>
                        <p className='header__text'>{text.subtitle}</p>
                        {/*<button className='btn btn__main'>Оформить подписку</button>*/}
                        <p className='header__label'>{text.download}</p>
                        <div className='header__btn-group'>
                            <Link to="https://play.google.com/store/apps/details?id=com.madlemonlab.sportup" target='blank' className='btn btn__google'></Link>
                        </div>
                    </div>
                    <div className={docClass}>
                        <h1 className='header__title'>{props.doc}</h1>
                    </div>
                </div>
            </div>  
        </header>
    );
};