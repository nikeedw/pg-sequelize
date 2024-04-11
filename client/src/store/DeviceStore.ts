import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	private types;
	private brands;
	private devices;

	constructor() {
		this.types = [
			{id: 1, name: 'Холодильники'},
			{id: 2, name: 'Смартфоны'}
		]
		this.brands = [
			{id: 1, name: 'Samsung'},
			{id: 2, name: 'Apple'}
		]
		this.devices = [
			{id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'gssada'}
		]
		makeAutoObservable(this);
	}

	setTypes(types: any): void {
		this.types = types;
	}

	setBrands(brands: any): void {
		this.brands = brands;
	}

	setDevices(devices: any): void {
		this.devices = devices;
	}

	get getTypes() {
		return this.types;
	}

	get getBrands() {
		return this.brands;
	}

	get getDevices() {
		return this.devices;
	}
}