import { handleVKClick } from '../utils/vkontakte.js';
import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

export default function LoginPopup({isOpenPopup, onClose, handleLoginGoogle, handleLoginVK}) {
    const text = useContext(TranslationContext);
    const popupClass= isOpenPopup ? ('popup popup_opened popup__login'): 'popup';
    
    return (
        <section className={popupClass}
            id='login-popup'
            isOpenPopup={isOpenPopup} 
            onClose={onClose}>
                <div className='popup__login-window'>
                    <button className='btn popup__close' onClick={onClose}></button>
                    <h3 className='popup__title'>{text.popupTitle}</h3>
                    <div className='popup__group'>
                        <button className='btn popup__btn' onClick={handleVKClick} id='VkIdSdkOneTap'><icon className='popup__btn-vk'></icon>{text.popupBtnVk}</button>
                        <button className='btn popup__btn' onClick={handleLoginGoogle}><icon className='popup__btn-google'></icon>{text.popupBtnGoogle}</button>
                    </div>
                </div>
        </section>
    );
};