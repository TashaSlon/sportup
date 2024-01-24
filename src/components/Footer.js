export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
                <p className='footer__copiright'>&copy; {year} SportUp</p>
        </footer>
    );
};