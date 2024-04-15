import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes/routes";
import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { check } from "../http/userAPI";
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
	const context = useContext(Context)
	const user = context!.user;
	const isAuth = user!.getIsAuth;

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check().then( (_) => {
			user.setUser(true)
			user.setIsAuth(true);
		}).finally(() => setLoading(false));
	}, [])

	if(loading) {
		return <Spinner animation="grow" />
	}

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
})

export default AppRouter
