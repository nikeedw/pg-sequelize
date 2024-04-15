import { JwtPayload, jwtDecode } from "jwt-decode";
import { $authHost, $host } from './index'

export const registration = async (email: string, password: string): Promise<JwtPayload> => {
	const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
	localStorage.setItem('token', data.token)
	return jwtDecode(data.token)
}

export const login = async (email: string, password: string): Promise<JwtPayload> => {
	const { data } = await $host.post('api/user/login', { email, password })
	localStorage.setItem('token', data.token)
	return jwtDecode(data.token)
}

export const check = async (): Promise<JwtPayload> => {
	const { data } = await $authHost.get('api/user/auth' )
	localStorage.setItem('token', data.token)
	return jwtDecode(data.token)
}
