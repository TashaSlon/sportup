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
    return (
        <section className="types">
            <h3 className="types__title">Виды спорта</h3>
            <div className="types__icons">
                <div className="types__icon">
                    <img src={run} className='types__img' alt="Бег" />
                    <p className='types__icon-name'>Бег</p>
                </div>
                <div className="types__icon">
                    <img src={gym} className='types__img' alt="Спортзал" />
                    <p className='types__icon-name'>Спортзал</p>
                </div>
                <div className="types__icon">
                    <img src={bicycle} className='types__img' alt="Велосипед" />
                    <p className='types__icon-name'>Велосипед</p>
                </div>
                <div className="types__icon">
                    <img src={ski} className='types__img' alt="Лыжи" />
                    <p className='types__icon-name'>Лыжи</p>
                </div>
                <div className="types__icon">
                    <img src={walk} className='types__img' alt="Хотьба" />
                    <p className='types__icon-name'>Хотьба</p>
                </div>
                <div className="types__icon">
                    <img src={skateboard} className='types__img' alt="Скейтборд" />
                    <p className='types__icon-name'>Скейтборд</p>
                </div>
                <div className="types__icon">
                    <img src={water} className='types__img' alt="Водный спорт" />
                    <p className='types__icon-name'>Водный спорт</p>
                </div>
                <div className="types__icon">
                    <img src={skates} className='types__img' alt="Коньки" />
                    <p className='types__icon-name'>Коньки</p>
                </div>
            </div>
            <div className='types__block'>
                <img src={map} className='types__map' alt='Карта' />
                <div className="types__text-block">
                    <p className='types__text-title'>SportUp</p>
                    <p className='types__text'>Вы можете бежать в Москве, а я в Перми, Элиуд Кипчоге в Берлине - и все одновременно, общаясь или молча, отставая и обгоняя друг друга. Быстрый поиск тренировок, партнёров и стартов!</p>
                </div>
            </div>
        </section>
    );
};