import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function User(props) {
    const text = useContext(TranslationContext);
    const user = useContext(CurrentUserContext);

    function openUserPopup() {
        props.onOpenLogin();
    }

    return (
        <div className="user">
            { (user.name) 
            ? <div className="user__block">
                <img className="user__photo" src={user.photo} alt={user.name} />
                <p className="user__name">{user.name}</p>
                </div>
            : <>
                <button className="btn user__login" onClick={openUserPopup}>{text.login}</button>
                <button className="user__lk" onClick={openUserPopup}></button>
            </> 
            }
        </div>
    );
};