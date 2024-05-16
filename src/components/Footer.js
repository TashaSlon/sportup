export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
                <div className="footer__block">
                    {(localStorage.getItem('lang') == 'ru') ? 
                        <div>
                            <p className='footer__copiright'>&copy; {year} ООО "МАД РЕДИС Лаб"</p>
                            <p className='footer__text'>6140051 Пермь Уинская 4</p>
                            <p className='footer__text'>ИНН: 5906174862 КПП:590601001</p>
                        </div>
                    : <p className='footer__copiright'>&copy; {year} SportUp</p>
                    }
                </div>
        </footer>
    );
};