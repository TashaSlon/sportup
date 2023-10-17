import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

export function OpenMenuPopup({ isOpenPopup, onClose }) {
    const text = useContext(TranslationContext);
    const popupClass= isOpenPopup ? ('popup popup_opened'): 'popup';

    function handleClose() {
        onClose();
    }

    return (
        <section className={popupClass}
        id='side-menu'
        isOpenPopup={isOpenPopup} 
        onClose={handleClose}>
            <div className='popup__top'>
                <button className='btn btn__close' onClick={onClose} type="reset"></button>
                <img src={logo} className="logo" alt="Логотип Место. Россия" />
            </div>
            <nav>
                <ul className="menu menu__side">
                    <li>
                        <Link to="/" className='links'>{text.service}</Link></li>
                    {/*<li>Тарифы</li>*/}
                    <li>
                        <Link to="/terms-conditions" className='links'>Terms-Conditions</Link></li>
                    <li>
                        <Link to="/privacy-policy" className='links'>Privacy-policy</Link></li>
                    <li>
                        <Link to="/delete-account" className='links'>{text.deleteAccountMenu}</Link></li>
                </ul>
            </nav>
        </section>
    )
}