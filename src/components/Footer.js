import logo from '../images/logo.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className='header__top'>
                <img src={logo} className="logo" alt="Логотип Место. Россия" />
                <nav>
                    <ul className="menu">
                        <li>О сервисе</li>
                        {/*<li>Тарифы</li>*/}
                        <li>Terms-Conditions</li>
                        <li>Privacy-policy</li>
                    </ul>
                </nav>
            </div>
            <div className='footer__block'>
                <p className='footer__copiright'>© 2023 SportUp</p>
                <div>
                    <p className='footer__label'>Скачать приложение</p>
                    <div className='footer__btn-group'>
                        <button className='btn btn__apple_dark'></button>
                        <button className='btn btn__google_dark'></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};