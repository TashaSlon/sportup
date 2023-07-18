import logo from '../images/logo.svg';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className='header__top'>
                <img src={logo} className="logo" alt="Логотип Место. Россия" />
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="/" className='links'>О сервисе</Link></li>
                        {/*<li>Тарифы</li>*/}
                        <li>
                            <Link to="/terms-conditions" className='links'>Terms-Conditions</Link></li>
                        <li>
                            <Link to="/privacy-policy" className='links'>Privacy-policy</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='footer__block'>
                <p className='footer__copiright'>© 2023 SportUp</p>
                <div>
                    <p className='footer__label'>Скачать приложение</p>
                    <div className='footer__btn-group'>
                        <Link to="https://play.google.com/store/apps/details?id=com.madlemonlab.sportup" target='blank'className='btn btn__google_dark'></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};