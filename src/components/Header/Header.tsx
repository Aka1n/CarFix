import {FC, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {ReactComponent as Logo} from '../../imgs/logo1.svg';
import classes from './Header.module.less'

const Header: FC = () => {

  const [burger, setBurger] = useState(false)

  const {pathname} = useLocation()

  return (
    <header>
      <div className={pathname !== '/' ? `${classes.header} ${classes.headerBlue}` : classes.header}>
        <div className="container">
          <div className={classes.row}>
            <div className={classes.burger}
								 onClick={() => burger ? setBurger(false) : setBurger(true)}>
              <span/>
            </div>
            <NavLink to="/">
              <Logo className={pathname !== '/' ? `${classes.logo} ${classes.logoWhite}` : classes.logo}/>
            </NavLink>
            <div className={burger ? `${classes.close} ${classes.active}` : classes.close}
								 onClick={() => setBurger(false)} >
              <nav className={burger ? classes.active : undefined}>
                <div>
                  <Logo className={classes.logo}/>
                </div>
                <NavLink className={i => i.isActive ? classes.isActive : undefined}
                  to="/register">Регистрация</NavLink>
                <NavLink className={i => i.isActive ? classes.isActive : undefined}
                  to="/login">Вход</NavLink>
                <NavLink className={i => i.isActive ? classes.isActive : undefined}
                  to="/service">Вы автосервис?</NavLink>
                <div>+375-(29)-111-11-11</div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header