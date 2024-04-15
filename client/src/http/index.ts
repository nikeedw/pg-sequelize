import axios from 'axios';

const $host = axios.create({
	baseURL: 'http://localhost:5000/',
});

const $authHost = axios.create({
	baseURL: 'http://localhost:5000/',
});

const authInterceptor = async (config: any) => {
	if (config.headers) {
		config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
	}
	return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
