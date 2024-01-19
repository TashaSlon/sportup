import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';

export default function Subscription(props) {
    const text = useContext(TranslationContext);
    return (
        <section className='subscription'>
            <h2 className='subscription__title block__title'>{text.subscription}</h2>
            <div className='subscription__block'>
                <div className='subscription__card'>
                    <div className='subscription__card-top1'>
                        <h3 className='subscription__card-title'>{text.subscriptionTariff1}</h3>
                        <p className='subscription__card-price'>{text.subscriptionPrice1}</p>
                    </div>
                    <ul className='subscription__list'>
                        <li className='subscription__list-item'>{text.subscriptionTariff1Desc1}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff1Desc2}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff1Desc3}</li>
                    </ul>
                    <button className='subscription__button btn btn__main' onClick={props.onOpenLogin}>{text.subscriptionTariff1Button}</button>
                </div>
                <div className='subscription__card'>
                    <div className='subscription__card-top2'>
                        <h3 className='subscription__card-title'>{text.subscriptionTariff2}</h3>
                        <p className='subscription__card-price'>{text.subscriptionPrice2}</p>
                    </div>
                    <ul className='subscription__list'>
                        <li className='subscription__list-item'>{text.subscriptionTariff2Desc1}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff2Desc2}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff2Desc3}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff2Desc4}</li>
                        <li className='subscription__list-item'>{text.subscriptionTariff2Desc5}</li>
                    </ul>
                    <button className='subscription__button btn btn__main' onClick={props.onOpenLogin}>{text.subscriptionTariff2Button}</button>
                </div>
            </div>
        </section>
    );
};