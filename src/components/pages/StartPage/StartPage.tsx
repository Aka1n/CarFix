import 'react-alice-carousel/lib/alice-carousel.css';
import './StartPage.less'
import {FC, useMemo} from 'react';
import { Select, Input, Button, Rate } from 'antd';
import AliceCarousel from 'react-alice-carousel';
import Title from '../../ui/Title/Title';
import service from '../../../imgs/Service.png'
import repair  from '../../../imgs/Слой_299.png'
import icon1  from '../../../imgs/Logo_CarFix_вектор.png'
import icon2  from '../../../imgs/city-filled.png'
import icon3  from '../../../imgs/time.png'
import icon4  from '../../../imgs/116--black.png'
import icon5  from '../../../imgs/like.png'
import icon6  from '../../../imgs/icon57.png'
import def from '../../../imgs/428-4287240_no-avatar-user-circle-icon-png.png'
import sto from '../../../imgs/sto.png'
import newsPhoto from '../../../imgs/129434f8abd645838f1a0b583ed0ceca_large.jpg'

const StarPage: FC = () => {

  const { TextArea } = Input;

  const treeData = [
    <Select.Option value="mazda">Mazda</Select.Option>,
    <Select.Option value="toyota">Toyota</Select.Option>,
    <Select.Option value="bmw">Bmw</Select.Option>,
  ];

  const reviews = [
    <div className="reviews__item item">
      <div className="reviews__card card">
        <div className="reviews__user user">
          <div className="reviews__img img">
            <img src={def} alt=""/>
          </div>
          <div className="reviews__info">
            <div className="reviews__name name">Максим Волков</div>
            <div className="reviews__car car">Aston Martin DB6</div>
            <Rate disabled defaultValue={2}/>
          </div>
        </div>
        <div className="reviews__review">
          <div className="reviews__title title">Артоцентр , 50 BYN</div>
          <div className="reviews__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,
    <div className="reviews__item item">
      <div className="reviews__card card">
        <div className="reviews__user user">
          <div className="reviews__img img">
            <img src={def} alt=""/>
          </div>
          <div className="reviews__info">
            <div className="reviews__name name">Максим Волков</div>
            <div className="reviews__car car">Aston Martin DB6</div>
            <Rate disabled defaultValue={2}/>
          </div>
        </div>
        <div className="reviews__review">
          <div className="reviews__title title">Артоцентр , 50 BYN</div>
          <div className="reviews__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,
    <div className="reviews__item item">
      <div className="reviews__card card">
        <div className="reviews__user user">
          <div className="reviews__img img">
            <img src={def} alt=""/>
          </div>
          <div className="reviews__info">
            <div className="reviews__name name">Максим Волков</div>
            <div className="reviews__car car">Aston Martin DB6</div>
            <Rate disabled defaultValue={2}/>
          </div>
        </div>
        <div className="reviews__review">
          <div className="reviews__title title">Артоцентр , 50 BYN</div>
          <div className="reviews__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,

  ];

  const completed = [
    <div className="completed__item item">
      <div className="completed__card card">
        <div className="completed__user user">
          <div className="completed__img img">
            <img src={def} alt=""/>
          </div>
          <div className="completed__info info">
            <div className="completed__name name">Максим Волков</div>
            <div className="completed__car car">Aston Martin DB6</div>
            <div className="completed__date date">14 января 2019</div>
          </div>
        </div>
        <div className="completed__review">
          <div className="completed__title title">Артоцентр , 50 BYN</div>
          <div className="completed__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,
    <div className="completed__item item">
      <div className="completed__card card">
        <div className="completed__user user">
          <div className="completed__img img">
            <img src={def} alt=""/>
          </div>
          <div className="completed__info info">
            <div className="completed__name name">Максим Волков</div>
            <div className="completed__car car">Aston Martin DB6</div>
            <div className="completed__date date">14 января 2019</div>
          </div>
        </div>
        <div className="completed__review">
          <div className="completed__title title">Артоцентр , 50 BYN</div>
          <div className="completed__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,
    <div className="completed__item item">
      <div className="completed__card card">
        <div className="completed__user user">
          <div className="completed__img img">
            <img src={def} alt=""/>
          </div>
          <div className="completed__info info">
            <div className="completed__name name">Максим Волков</div>
            <div className="completed__car car">Aston Martin DB6</div>
            <div className="completed__date date">14 января 2019</div>
          </div>
        </div>
        <div className="completed__review">
          <div className="completed__title title">Артоцентр , 50 BYN</div>
          <div className="completed__text text">Сделали всё хорошо, качественно , всё устроило .</div>
        </div>
      </div>
    </div>,
  ]

  const responsive = {
    0: { items: 1 },
    800: { items: 2 },
    1024: { items: 3 },
  };

  const Carousel = (items: JSX.Element[]) => useMemo(() =>
    <AliceCarousel
      mouseTracking
      items={items}
      paddingLeft={50}
      paddingRight={50}
      responsive={responsive}
    />,[])

  return (
    <div className="start-page">
      <div className="content">
        <section className="register">
          <div className="container">
            <div className="register__body">
              <h1>СОЗДАЙТЕ ЗАЯВКУ</h1>
              <h2>И мы предоставим для вас выбор
                <div><span>лучших</span> автосервисов</div>
              </h2>
              <Select placeholder='ВЫБЕРИТЕ МАРКУ АВТО'>
                {treeData}
              </Select>
              <TextArea placeholder="НАПИШИТЕ, ЧТО НУЖНО ПОЧИНИТЬ..."
                autoSize={{ minRows: 3, maxRows: 5 }}
                maxLength={300}
              />
              <Button type="primary" block>СОЗДАТЬ ЗАЯВКУ</Button>
              <img className="register__service" src={service} alt=""/>
            </div>
          </div>
        </section>
        <section className='howIsWork'>
          <Title text='Как это работает CarFix?' direction='left'/>
          <div className="container">
            <div className="howIsWork__body">
              <div className="howIsWork__cards">
                <div className="howIsWork__card">
                  <div className="howIsWork__item-1">
                    <div className="howIsWork__title">Создаёте заявку</div>
                                        с кратким описанием работ. Это займет не более 5 минут.
                  </div>
                </div>
                <div className="howIsWork__card">
                  <div className="howIsWork__item-2">
                    <div className="howIsWork__title">Получаете предложения</div>
                                        от автосервисов в личном кабинете или по SMS.
                  </div>
                </div>
                <div className="howIsWork__card">
                  <div className="howIsWork__item-3">
                    <div className="howIsWork__title">Сравниваете ответы</div>
                                        наиболее подходящие вашим условиям - стоимости, отзывам, местоп
                  </div>
                </div>
                <div className="howIsWork__card">
                  <div className="howIsWork__item-4">
                    <div className="howIsWork__title">Подтверждаете запись</div>
                                        а также дату и время ремонта и все остальные условия. Едем смел
                  </div>
                </div>
              </div>
              <div className="howIsWork__img">
                <img src={repair} alt=""/>
              </div>
            </div>
          </div>
        </section>
        <section className="whyAreWe">
          <Title text="Почему именно мы ?" direction="right"/>
          <div className="container">
            <div className="whyAreWe__body">
              <div className="whyAreWe__item">
                <div>
                  <img src={icon1} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">15 000 +</div>
                  <span>Автосервисов в городах России и стран СНГ</span>
                </div>
              </div>
              <div className="whyAreWe__item">
                <div>
                  <img src={icon2} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">100+</div>
                  <span>Городов входит в сеть автомастерских</span>
                </div>
              </div>
              <div className="whyAreWe__item">
                <div>
                  <img src={icon3} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">10 мин</div>
                  <span>Среднее время ответа автосервиса на заявку</span>
                </div>
              </div>
              <div className="whyAreWe__item">
                <div>
                  <img src={icon4} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">1 200+</div>
                  <span>Ежедневное количество заявок</span>
                </div>
              </div>
              <div className="whyAreWe__item">
                <div>
                  <img src={icon5} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">400 000+</div>
                  <span>Заявок оформили автовладельцы на портале </span>
                </div>
              </div>
              <div className="whyAreWe__item">
                <div>
                  <img src={icon6} alt=""/>
                </div>
                <div className="whyAreWe__text">
                  <div className="whyAreWe__title">24 часа</div>
                  <span>Круглосуточная техподдержка партнеров и автовладельцев</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="leaveARequest">
          <div className="container">
            <div className="leaveARequest__body">
              <div className="leaveARequest__title">
                <span>Оставьте заявку и</span> сэкономьте своё время и
                                деньги <p>Создание заявки абсолютно бесплатно и займет у вас не более 5 минут</p>
              </div>
              <div className="leaveARequest__input">
                <TextArea placeholder="НАПИШИТЕ, ЧТО НУЖНО ПОЧИНИТЬ..."
                  autoSize={{ minRows: 1, maxRows: 1 }}
                  maxLength={300}
                />
                <button type="button" className="leaveARequest__button">СОЗДАТЬ ЗАЯВКУ</button>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews">
          <Title text="Отзывы клиентов об автосервисах" direction="left"/>
          <div className="container">
            <div className="reviews__cards cards">
              {Carousel(reviews)}
              <button type="button" className="reviews__button">
                                ПОСМОТРЕТЬ ВСЕ ОТЗЫВЫ
              </button>
            </div>
          </div>
        </section>
        <section className="completed">
          <Title text="Последние выполненные заявки" direction="right"/>
          <div className="container">
            <div className="completed__cards cards">
              {Carousel(completed)}
            </div>
          </div>
        </section>
        <section className="rate">
          <Title text="Рейтинг автосервисов" direction="left"/>
          <div className="container">
            <div className="rate__cards">
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
              <div className="rate__card card">
                <div className="rate__logo">
                  <img src={sto} alt=""/>
                </div>
                <div className="rate__info">
                  <div className="rate__title">ЛорААвто</div>
                  <div className="rate__address">Беларусь, Минская область, Минский район, Сеницкий сельский совет</div>
                  <Rate disabled defaultValue={2}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news">
          <Title text="Новости и авторские статьи" direction="right"/>
          <div className="container news-container">
            <div className="news__body">
              <div className="news__last card">
                <img src={newsPhoto} alt=""/>
                <div className="news__content">
                  <div className="news__date">11.11.1111</div>
                  <div className="news__text">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div className="news__prev">
                <div className="news__item card">
                  <img src={newsPhoto} alt=""/>
                  <div className="news__content">
                    <div className="news__date">11.11.1111</div>
                    <div className="news__text">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
                <div className="news__item card">
                  <img src={newsPhoto} alt=""/>
                  <div className="news__content">
                    <div className="news__date">11.11.1111</div>
                    <div className="news__text">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
                <div className="news__item card">
                  <img src={newsPhoto} alt=""/>
                  <div className="news__content">
                    <div className="news__date">11.11.1111</div>
                    <div className="news__text">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
                <div className="news__item card">
                  <img src={newsPhoto} alt=""/>
                  <div className="news__content">
                    <div className="news__date">11.11.1111</div>
                    <div className="news__text">Lorem ipsum dolor sit amet.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


export default StarPage