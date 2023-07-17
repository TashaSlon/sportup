import logo from '../images/logo.svg';

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
                    <li>О сервисе</li>
                    {/*<li>Тарифы</li>*/}
                    <li>Terms-Conditions</li>
                    <li>Privacy-policy</li>
                </ul>
            </nav>
        </section>
    )
}