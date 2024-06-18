export interface GoogleAuthUser {
	uid: string;
	displayName: string;
	photoURL: string;
	email: string;
	[key: string]: any;
}

export interface RequiredUserData {
	uid: string;
	displayName: string;
	photoURL: string;
	email: string;
}

export interface Transaction {
	name: string;
	type: string;
	date: string;
	amount: number | string;
	tag: string;
}
