import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import RoutesEnum from "../routes/routes";
import { useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
	const context = useContext(Context);
	const user = context?.user;
	const isAuth = user?.getIsAuth;

	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<NavLink
					to={RoutesEnum.SHOP_ROUTE}
					style={{
						color: 'white'
					}}
				>
					STORE
				</NavLink>
				{isAuth ?
					<Nav style={{ marginLeft: 'auto', color: 'white', gap: 5 }}>
						<Button variant="outline-light">Админ панель</Button>
						<Button variant="outline-light">Выйти</Button>
					</Nav>
					:
					<Nav style={{ marginLeft: 'auto', color: 'white', gap: 5 }}>
						<Button variant="outline-light" onClick={() => user?.setIsAuth(true)}>Авторизация</Button>
					</Nav>
				}
			</Container>
		</Navbar>
	);
});

export default NavBar;
