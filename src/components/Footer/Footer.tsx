import {FC, useState} from 'react';
import vk from '../../imgs/vk.png';
import teleg from '../../imgs/teleg.png';
import inst from '../../imgs/inst.png';
import classes from './Footer.module.less'


const Footer: FC = () => {

  const [active, setActive] = useState({
    '1': false,
    '2': false,
    '3': false
  })

  return (
    <footer>
      <div className={classes.footer}>
        <div className="container">
          <div className={classes.body}>
            <div className={classes.item}>
              <div className={active['1'] ? `${classes.title} ${classes.active}` : classes.title}
									 onClick={() => {
										 if (active['1']) {
											 const obj = {1: false, 2: false, 3: false}
											 setActive(obj)
										 }
										 else {
											 const obj = {1: true, 2: false, 3: false}
											 setActive(obj)
										 }
									 }}>CarFix</div>
              <ul className={active['1'] ? classes.active : undefined}>
                <li>Регистрация</li>
                <li>Отправить заявку</li>
                <li>Контакты</li>
                <li>Как это работает</li>
              </ul>
            </div>
            <div className={classes.item} >
              <div className={active['2'] ? `${classes.title} ${classes.active}` : classes.title}
									 onClick={() => {
										 if (active['2']) {
											 const obj = {1: false, 2: false, 3: false}
											 setActive(obj)
										 }
										 else {
											 const obj = {1: false, 2: true, 3: false}
											 setActive(obj)
										 }
									 }}>Информация</div>
              <ul className={active['2'] ? classes.active : undefined}>
                <li>Соглашения</li>
                <li>Оферта</li>
                <li>Конфиденциальность</li>
              </ul>
            </div>
            <div className={classes.item}>
              <div className={active['3'] ? `${classes.title} ${classes.active}` : classes.title}
									 onClick={() => {
										 if (active['3']) {
											 const obj = {1: false, 2: false, 3: false}
											 setActive(obj)
										 }
										 else {
											 const obj = {1: false, 2: false, 3: true}
											 setActive(obj)
										 }
									 }}>О проекте</div>
              <ul className={active['3'] ? classes.active : undefined}>
                <li>Вопрос-ответ</li>
              </ul>
            </div>
            <div className={classes.item}>
              <div className={classes.number}>+375 (29) 222-22-22</div>
              <div className={classes.email}>support@carfix.by</div>
              <div className={classes.social}>
                <img src={vk} alt=""/>
                <img src={teleg} alt=""/>
                <img src={inst} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer