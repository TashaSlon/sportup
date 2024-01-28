import { Link } from "react-router-dom";
import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';
import Video from '../images/deleteAccountVideo.gif';

export default function Delete() {
    const text = useContext(TranslationContext);

    return (
        <div className="delete">
            <div className="delete__text-block">
                <p>{text.deleteAccountText}</p>
                <ol>
                    <li>{text.deleteAccountStep1}</li>
                    <li>{text.deleteAccountStep2}</li>
                    <li>{text.deleteAccountStep3}</li>
                    <li>{text.deleteAccountStep4}</li>
                </ol>
            </div>
            <img className='video' src={Video} alt={text.deleteAccountVideo} />
        </div>
    );
};