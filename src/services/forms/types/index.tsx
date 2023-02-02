export interface Fields {
	id: string;
	title: string;
	subtitle: string;
	widget_type: string;
	value: string;
	description?: any;
}

export interface FormResponse {
	title: string;
	color: string;
	schema_id: string,
	formValues: Fields[];
}

export interface FormsRequest {
	userId: string;
}

export interface FormsResponse {
	id: string;
	created: string;
}
