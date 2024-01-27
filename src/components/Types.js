import { useContext } from 'react';
import { TranslationContext } from '../contexts/translation/translationContext';
import run from '../images/run.svg';
import gym from '../images/gym.svg';
import bicycle from '../images/bicycle.svg';
import ski from '../images/ski.svg';
import walk from '../images/walk.svg';
import skateboard from '../images/skateboard.svg';
import water from '../images/water.svg';
import skates from '../images/skates.svg';
import map from '../images/map.png';

export default function Types() {
    const text = useContext(TranslationContext);

    return (
        <section className="types">
            <h3 className="types__title">{text.sports}</h3>
            <div className="types__icons">
                <div className="types__icon">
                    <img src={run} className='types__img' alt={text.sport1} />
                    <p className='types__icon-name'>{text.sport1}</p>
                </div>
                <div className="types__icon">
                    <img src={gym} className='types__img' alt={text.sport2} />
                    <p className='types__icon-name'>{text.sport2}</p>
                </div>
                <div className="types__icon">
                    <img src={bicycle} className='types__img' alt={text.sport3} />
                    <p className='types__icon-name'>{text.sport3}</p>
                </div>
                <div className="types__icon">
                    <img src={ski} className='types__img' alt={text.sport4} />
                    <p className='types__icon-name'>{text.sport4}</p>
                </div>
                <div className="types__icon">
                    <img src={walk} className='types__img' alt={text.sport5} />
                    <p className='types__icon-name'>{text.sport5}</p>
                </div>
                <div className="types__icon">
                    <img src={skateboard} className='types__img' alt={text.sport6} />
                    <p className='types__icon-name'>{text.sport6}</p>
                </div>
                <div className="types__icon">
                    <img src={water} className='types__img' alt={text.sport7} />
                    <p className='types__icon-name'>{text.sport7}</p>
                </div>
                <div className="types__icon">
                    <img src={skates} className='types__img' alt={text.sport8} />
                    <p className='types__icon-name'>{text.sport8}</p>
                </div>
            </div>
            <div className='types__block'>
            <img src={map} className='types__map' alt={text.sportImage} />
                <div className="types__text-block">
                    <h3 className='types__text-title'>{text.title2}</h3>
                    <p className='types__text'>{text.subtitle2}</p>
                    <p className='types__text'>{text.subtitle3}</p>
                </div>
            </div>
        </section>
    );
};