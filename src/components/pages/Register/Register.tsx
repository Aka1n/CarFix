import React, {FC} from 'react';
import {useForm, Controller} from 'react-hook-form';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import {RegisterType} from '../../../types';
import classes from './Register.module.less'
import Title2 from '../../ui/Title2/Title2';



const Register: FC = () => {

  const {
    formState: {
      errors,
      isValid
    },
    setError,
    reset,
    handleSubmit,
    control

  } = useForm<RegisterType>({
    mode: 'all'
  })

  const onSubmit = (data: RegisterType) => {
    const {password, rePassword} = data
    if (password !== rePassword) {
      setError('rePassword', {
        message: 'Неверно введен повтор пароля'
      }, { shouldFocus: true })
    }
  }

  return (
    <div className={classes.register}>
      <Title2 text="Регистрация автовладельца"/>
      <div className="container">
        <div className={classes.container}>
          <div className={classes.body}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Логин:
                <Controller rules={{
                  required: 'Введите логин'
                }}
                            control={control}
                            render={({ field }) => <Input className={errors?.login && classes.error}
                                                          placeholder="ПРИДУМАЙТЕ ЛОГИН..."
                                                          {...field}/>} name="login"/>
              </label>
              <label>
                Пароль:
                <Controller rules={{
                  required: 'Введите пароль'
                }}
                            control={control}
                            render={({field}) => <Input.Password className={errors?.password && classes.error}
                                                                 placeholder="ПРИДУМАЙТЕ ПАРОЛЬ..."
                                                                 {...field}/>} name="password"/>
              </label>
              <label>
                Повторите пароль:
                <Controller rules={{
                  required: 'Повторите пароль'
                }}
                            control={control}
                            render={({field}) => <Input.Password
                              className={errors?.rePassword && classes.error}
                              placeholder="ВВЕДИТЕ ПАРОЛЬ ЕЩЕ РАЗ..."
                              autoComplete="off"
                              visibilityToggle={false}
                              {...field}/>} name="rePassword"/>
                {errors?.rePassword?.message && <p className={classes.errorText}>
                  <FontAwesomeIcon className={classes.icon} icon={faTriangleExclamation}/>
                  {errors.rePassword.message}</p>}
              </label>
              <label>
                Имя:
                <Controller rules={{
                  required: 'Введите своё имя'
                }}
                            control={control}
                            render={({field}) => <Input
                              className={errors?.name && classes.error}
                              placeholder="ВВЕДИТЕ СВОЁ ИМЯ..."
                              {...field}/>} name="name"/>
              </label>
              <label>
                Email:
                <Controller rules={{
                  required: 'Введите свой Email'
                }}
                            control={control}
                            render={({field}) => <Input
                              className={errors?.email && classes.error}
                              placeholder="ВВЕДИТЕ СВОЙ EMAIL..."
                              {...field}/>} name="email"/>
              </label>
              <label>
                Номер телефона:
                <Controller rules={{
                  required: 'Введите свой номер телефона',
                  pattern: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/
                }}
                            control={control}
                            render={({field}) => <Input
                              className={errors?.phone && classes.error}
                              placeholder="+ 375 __ ___ __ __"
                              {...field}/>} name="phone"/>
              </label>
              <input className="submitButton" disabled={!isValid} value="ЗАРЕГИСТРИРОВАТЬСЯ" type="submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register