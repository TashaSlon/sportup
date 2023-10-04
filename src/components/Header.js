import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import LangToggle from './LangToggle';

export default function Header(props) {
    const text = JSON.parse(localStorage.getItem('text'));
    const mainClass = props.type === 'document' ? 'header__hidden' : 'header__text-block'
    const docClass = props.type === 'document' ? 'header__text-block' : 'header__hidden';

    return (
        <header className={ props.type==='document'?"header__back-document":"header__back" }>
            <div className='header'>
                <div className='header__top'>
                    <button className='btn btn__menu' onClick={props.onOpenMenu}></button>
                    <img src={logo} className="logo" alt="Логотип Место. Россия" />
                    <nav>
                        <ul className="menu menu__top">
                            <li>
                                <LangToggle handleLanguage={props.handleLanguage}/>
                            </li>
                            <li>
                                <Link to="/" className='links'>{text.service}</Link></li>
                            {/*<li>Тарифы</li>*/}
                            <li>
                                <Link to="/terms-conditions" className='links'>Terms-Conditions</Link></li>
                            <li>
                                <Link to="/privacy-policy" className='links'>Privacy-policy</Link></li>
                        </ul>
                    </nav>
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