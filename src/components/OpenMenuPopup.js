import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

export function OpenMenuPopup({ isOpen, onClose }) {
    const popupClass= isOpen ? ('popup popup_opened'): 'popup';

    function handleClose() {
        onClose();
    }

    return (
        <section className={popupClass}
        id='side-menu'
        isOpen={isOpen} 
        onClose={handleClose}>
            <div className='popup__top'>
                <button className='btn btn__close' onClick={onClose} type="reset"></button>
                <img src={logo} className="logo" alt="Логотип Место. Россия" />
            </div>
            <nav>
                <ul className="menu menu__side">
                    <li>
                        <Link to="/" className='links'>О сервисе</Link></li>
                    {/*<li>Тарифы</li>*/}
                    <li>
                        <Link to="/terms-conditions" className='links'>Terms-Conditions</Link></li>
                    <li>
                        <Link to="/privacy-policy" className='links'>Privacy-policy</Link></li>
                </ul>
            </nav>
        </section>
    )
}