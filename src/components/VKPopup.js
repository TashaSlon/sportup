export default function LoginPopup({isOpenPopup, onClose, authRef}) {
    const popupClass= isOpenPopup ? ('popup popup_opened popup__VK'): 'popup';

    return (
        <section className={popupClass}
            isOpenPopup={isOpenPopup} 
            onClose={onClose}>
                <div className="popup__VKwindow" id='VK-popup' ref={authRef}>
                    <button className='btn popup__close' onClick={onClose}></button>
                </div>   
        </section>
    );
};