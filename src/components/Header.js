import logo from '../images/logo.svg';

export default function Header() {

    return (
        <header className="header__back">
            <div className='header'>
                <div className='header__top'>
                    <btn className='btn btn__menu'></btn>
                    <img src={logo} className="logo" alt="Логотип Место. Россия" />
                    <nav>
                        <ul className="menu menu__top">
                            <li>О сервисе</li>
                            {/*<li>Тарифы</li>*/}
                            <li>Terms-Conditions</li>
                            <li>Privacy-policy</li>
                        </ul>
                    </nav>
                </div>
                <div className='header__banner'>
                    <div className='header__text-block'>
                        <h1 className='header__title'>Присоединись к тренировке!</h1>
                        <p className='header__text'>SportUp - облачный трекер совместных удалённых тренировок и соревнований в реальном масштабе времени</p>
                        {/*<button className='btn btn__main'>Оформить подписку</button>*/}
                        <p className='header__label'>Скачать приложение</p>
                        <div className='header__btn-group'>
                            <button className='btn btn__apple'></button>
                            <button className='btn btn__google'></button>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
    );
};