import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	private types: IType[];
	private brands: IBrand[];
	private devices: IDevice[];
	private selectedType: IBrand;
	private selectedBrand: IType;

	constructor() {
		this.types = [
			{id: 1, name: 'Холодильники'},
			{id: 2, name: 'Смартфоны'},
			{id: 3, name: 'Ноутбуки'},
			{id: 4, name: 'Телевизоры'},
		]
		this.brands = [
			{id: 1, name: 'Samsung'},
			{id: 2, name: 'Apple'},
			{id: 3, name: 'Lenovo'},
			{id: 4, name: 'Asus'},
		]
		this.devices = [
			{id: 1, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 2, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 3, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 4, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 5, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 6, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 7, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 8, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
			{id: 9, name: 'Iphone 12 pro', price: 20000, rating: 5, img: 'https://yt3.ggpht.com/a/AGF-l78zTJeYADnfkU5LyoOW9iLuTQIjOuiRuxB5nQ=s900-c-k-c0xffffffff-no-rj-mo'},
		]
		this.selectedType = {id: 0, name: ''};
		this.selectedBrand = {id: 0, name: ''};
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

	setSelectedType(type: any): void {
		this.selectedType = type;
	}

	setSelectedBrand(brand: any): void {
		this.selectedBrand = brand;
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

	get getSelectedType() {
		return this.selectedType;
	}

	get getSelectedBrand() {
		return this.selectedBrand;
	}
}