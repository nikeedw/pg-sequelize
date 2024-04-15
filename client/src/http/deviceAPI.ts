import { $authHost } from './index'

export const createType = async (type: IType) => {
	const { data } = await $authHost.post('api/type', type)
	return data
}

export const fetchTypes = async () => {
	const { data } = await $authHost.get('api/type')
	return data;
}

export const createBrand = async (brand: IBrand) => {
	const { data } = await $authHost.post('api/brand', brand)
	return data
}

export const fetchBrands = async () => {
	const { data } = await $authHost.get('api/brand')
	return data;
}

export const createDevice = async (device: IDevice | FormData) => {
	const { data } = await $authHost.post('api/device', device)
	return data
}

export const fetchDevices = async (
	typeId: string | null, 
	brandId: string | null, 
	page: number, 
	limit: number = 5
) => {
	const { data } = await $authHost.get('api/device', {
		params: {
			typeId,
			brandId,
			page, 
			limit
		}
	})
	return data;
}

export const fetchOneDevice = async (id: string) => {
	const { data } = await $authHost.get('api/device/' + id)
	return data;
}