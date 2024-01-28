export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
                <div className="footer__block">
                    <p className='footer__copiright'>&copy; {year} SportUp</p>
                </div>
        </footer>
    );
};