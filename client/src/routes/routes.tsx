import NavBar from "../components/NavBar"
import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import Device from "../pages/Device"
import Shop from "../pages/Shop"

enum RoutesEnum {
	ADMIN_ROUTE = '/admin',
	LOGIN_ROUTE = '/login',
	REGISTRATION_ROUTE = '/registration',
	SHOP_ROUTE = '/',
	BASKET_ROUTE = '/basket',
	DEVICE_ROUTE = '/device',
}

export const authRoutes = [
	{
		path: RoutesEnum.ADMIN_ROUTE,
		element: <Admin />,
		exact: true,
	},
	{
		path: RoutesEnum.BASKET_ROUTE,
		element: <Basket />,
		exact: true,
	},
]

authRoutes.forEach(route => {
	route.element = 
		<>
			<NavBar />
			{route.element}
		</>
})

export const publicRoutes = [
	{
		path: RoutesEnum.SHOP_ROUTE,
		element: <Shop />,
		exact: true,
	},
	{
		path: RoutesEnum.LOGIN_ROUTE,
		element: <Auth />,
		exact: true,
	},
	{
		path: RoutesEnum.REGISTRATION_ROUTE,
		element: <Auth />,
		exact: true,
	},
	{
		path: RoutesEnum.DEVICE_ROUTE + '/:id',
		element: <Device />,
		exact: true,
	},
]

publicRoutes.forEach(route => {
	route.element = 
		<>
			<NavBar />
			{route.element}
		</>
})

export default RoutesEnum;