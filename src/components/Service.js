export default function Service() {
    return (
        <section className='service'>
            <h2 className='service__title'>О сервисе</h2>
            <div className='service__block'>
                <ul className='service__items'>
                    <li className="service__item service__item_trainning">
                        <p className='service__item-title'>Создай тренировку!</p>
                        <p className='service__item-text'>Если, Вы не нашли устраивающее Вас событие - создайте свою тренировку или соревнование.</p>
                    </li>
                    <li className="service__item service__item_friends">
                        <p className='service__item-title'>Приглашай друзей!</p>
                        <p className='service__item-text'>Приглашай друзей через социальные сети, почту, смс, мессенджеры.</p>
                    </li>
                </ul>
                <ul className='service__items'>
                    <li className="service__item service__item_chat">
                        <p className='service__item-title'>Общайся!</p>
                        <p className='service__item-text'>Общайся голосом, видео, текстом во время тренировки или во время ожидания.</p>
                    </li>
                    <li className="service__item service__item_competition">
                        <p className='service__item-title'>Присоединись к тренировке!</p>
                        <p className='service__item-text'>Выберете событие с нужным видом спорта и расстоянием, тапните и Вы станете участником этого события.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};