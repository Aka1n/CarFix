import React, {FC} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Input} from 'antd';
import classes from './Login.module.less'
import Title2 from '../../ui/Title2/Title2';

const Login: FC = () => {

	const {
		formState: {
			errors,
			isValid
		},
		setError,
		reset,
		handleSubmit,
		control

	} = useForm({
		mode: 'all'
	})

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<div className={classes.login}>
			<Title2 text="Вход"/>
			<div className="container">
				<div className={classes.container}>
					<div className={classes.body}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>
								<Controller rules={{
									required: 'Введите логин'
								}}
														control={control}
														render={({ field }) => <Input className={errors?.login && classes.error}
																													placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА , ЛОГИН ИЛИ EMAIL..."
																													{...field}/>} name="login"/>
							</label>
							<label>
								<Controller rules={{
									required: 'Введите пароль'
								}}
														control={control}
														render={({ field }) => <Input.Password className={errors?.login && classes.error}
																													autoComplete="off"
																													visibilityToggle={false}
																													placeholder="ВВЕДИТЕ ПАРОЛЬ..."
																													{...field}/>} name="password"/>
							</label>
							<input className="submitButton" disabled={!isValid} value="ВОЙТИ" type="submit"/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login