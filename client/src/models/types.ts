interface IBrand {
	id: string,
	name: string,
}

interface IType extends IBrand {};

type InfoType = {
	id: string
	title: string
	description: string
}

interface IDevice {
	id: string, 
	name: string, 
	price: number, 
	rating: number, 
	img: string,
	info: InfoType[]
}

enum RolesEnum {
	ADMIN,
	USER
}

interface IUser {
	email: string
	id: number
	role: RolesEnum
}