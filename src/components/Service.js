export default function Service() {
    const text = JSON.parse(localStorage.getItem('text'));
    return (
        <section className='service'>
            <h2 className='service__title'>text.service</h2>
            <div className='service__block'>
                <ul className='service__items'>
                    <li className="service__item service__item_trainning">
                        <p className='service__item-title'>{text.aboutH1}</p>
                        <p className='service__item-text'>{text.aboutText1}</p>
                    </li>
                    <li className="service__item service__item_friends">
                        <p className='service__item-title'>{text.aboutH2}</p>
                        <p className='service__item-text'>{text.aboutText2}</p>
                    </li>
                </ul>
                <ul className='service__items'>
                    <li className="service__item service__item_chat">
                        <p className='service__item-title'>{text.aboutH3}</p>
                        <p className='service__item-text'>{text.aboutText3}</p>
                    </li>
                    <li className="service__item service__item_competition">
                        <p className='service__item-title'>{text.aboutH4}</p>
                        <p className='service__item-text'>{text.aboutText4}</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};