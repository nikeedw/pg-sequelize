import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes/routes";
import { useContext } from "react";
import { Context } from "../main";

const AppRouter = () => {
	const context = useContext(Context)
	const user = context?.user;
	const isAuth = user?.getIsAuth;

	const routes = [
		...(isAuth ? authRoutes : []).map(route => ({
			path: route.path,
			element: route.element,
			exact: route.exact,
		})),
		...publicRoutes.map(route => ({
			path: route.path,
			element: route.element,
			exact: route.exact,
		})),
		{
			path: '*',
			element: <Navigate to='/' />,
			exact: true
		}
	];

	const router = createBrowserRouter(routes);

	return (
		<RouterProvider router={router} />
	)
}

export default AppRouter
