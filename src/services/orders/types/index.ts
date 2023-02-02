export interface Fields {
	id: string;
	title: string;
	subtitle: string;
	widget_type: string;
	value: string;
	description?: any;
}

export interface OrderResponse {
	id: string;
	state: string;
	schema_id: string | number;
	instructionsFields: Fields[];
	resultsFields: Fields[];
}

export interface FormsRequest {
	userId: string;
}

export interface OrdersResponse {
	id: string;
	created: string;
}
