import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import RoutesEnum from "../routes/routes"
import { login, registration } from "../http/userAPI";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Auth = observer(() => {
	const location = useLocation();
	const isLogin = location.pathname === RoutesEnum.LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const context = useContext(Context);
	const user = context!.user;

	const navigate = useNavigate();

	const click = async () => {
		try {
			let data;
			if(isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}

			user.setUser(data);
			user.setIsAuth(true);
			navigate(RoutesEnum.SHOP_ROUTE);
		} catch (error: any) {
			alert(error.response.data.message);
		}
	}

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
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className="mt-3"
						placeholder="Введите пароль"
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
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
						<Button 
							variant={"outline-success"} 
							className="mt-3"
							onClick={click}
						>
							{isLogin ? 'Войти' : 'Зарегестрироваться'}
						</Button>
					</Row>
				</Form>
			</Card>
		</Container>
	)
})

export default Auth
