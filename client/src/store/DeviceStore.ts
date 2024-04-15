import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	private types: IType[];
	private brands: IBrand[];
	private devices: IDevice[];
	private selectedType: IBrand;
	private selectedBrand: IType;
	private page: number;
	private totalCount: number;
	private limit: number;

	constructor() {
		this.types = []
		this.brands = []
		this.devices = []
		this.selectedType = {id: '', name: ''};
		this.selectedBrand = {id: '', name: ''};
		this.page = 1
		this.totalCount = 0
		this.limit = 3
		makeAutoObservable(this);
	}

	setTypes(types: IType[]): void {
		this.types = types;
	}

	setBrands(brands: IBrand[]): void {
		this.brands = brands;
	}

	setDevices(devices: IDevice[]): void {
		this.devices = devices;
	}

	setSelectedType(type: IType): void {
		this.setPage(1);
		this.selectedType = type;
	}

	setSelectedBrand(brand: IBrand): void {
		this.setPage(1);
		this.selectedBrand = brand;
	}

	setPage(page: number): void {
		this.page = page;
	}

	setLimit(limit: number): void {
		this.limit = limit;
	}

	setTotalCount(totalCount: number): void {
		this.totalCount = totalCount;
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

	get getPage() {
		return this.page;
	}

	get getLimit() {
		return this.limit;
	}

	get getTotalCount() {
		return this.totalCount;
	}
}