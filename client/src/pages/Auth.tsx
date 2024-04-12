import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import RoutesEnum from "../routes/routes"

const Auth = () => {
	const location = useLocation();
	const isLogin = location.pathname === RoutesEnum.LOGIN_ROUTE;

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ height: window.innerHeight - 54 }}
		>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Введите email"
						type="email"
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите пароль"
						type="password"
					/>
					<Row className="d-flex justify-content-between mt-3">
						{isLogin ?
							<div>
								Нет аккаунта? <NavLink to={RoutesEnum.REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink>
							</div>
							:
							<div>
								Уже есть аккаунт? <NavLink to={RoutesEnum.LOGIN_ROUTE}>Войдите</NavLink>
							</div>
						}
						<Button variant={"outline-success"} className="mt-3">
							{isLogin ? 'Войти' : 'Зарегестрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
