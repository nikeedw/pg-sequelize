interface IBrand {
	id: number,
	name: string,
}

interface IType extends IBrand {};

interface IDevice {
	id: number, 
	name: string, 
	price: number, 
	rating: number, 
	img: string,
}