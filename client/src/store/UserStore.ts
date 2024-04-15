import { JwtPayload } from "jwt-decode";
import { makeAutoObservable } from "mobx";

export default class UserStore {
	private isAuth;
	private user;

	constructor() {
		this.isAuth = false;
		this.user = {};
		makeAutoObservable(this);
	}

	setIsAuth(bool: boolean): void {
		this.isAuth = bool;
	}

	setUser(user: IUser | JwtPayload): void {
		this.user = user;
	}

	get getIsAuth() {
		return this.isAuth;
	}

	get getUser() {
		return this.user;
	}
}