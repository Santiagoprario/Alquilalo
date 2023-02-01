export interface Forms {
	type: string;
	label: string;
	value: string;
}

export interface FormResponse {
	id: string;
	name: string;
	fields: Forms[];
}

export interface FormsRequest {
	userId: string;
}
