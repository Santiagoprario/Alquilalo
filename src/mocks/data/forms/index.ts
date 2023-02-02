import { FormsResponse } from '@/services/forms/types';

export const responseFormSuccess = {
	title: "REGISTRO DE RECEPCIÓN DE INSUMOS",
	color: "BLUE",
	formValues: [
			{
					id: "FWOj2yxhx",
					title: "Estado",
					subtitle: "",
					widget_type: "LABEL_FIELD",
					value: "Solicitud realizada"
			},
			{
					id: "FWHCTJKNw",
					title: "Responsable",
					subtitle: "Seleccione alguna opcion",
					widget_type: "DROPDOWN_SELECTION",
					value: "Juan Murga"
			},
			{
					"id": "FW0LrIwKV",
					"title": "Seleccione el responsable",
					"subtitle": "",
					"widget_type": "MASTER_DB_TABLE",
					"description": {
							"mdb_id": 2,
							"main_field": 1,
							"show_fields": [],
							"cols": [],
							"total_fields": []
					},
					"value": {
							"rows": [
									{
											"1": "N/A"
									}
							],
							"totals": {}
					}
			},
			{
					"id": "FWrDBUYcM",
					"title": "Seleccione el responsable",
					"subtitle": "",
					"widget_type": "MASTER_DB_TABLE",
					"description": {
							"mdb_id": 3,
							"main_field": 1,
							"show_fields": [],
							"cols": [],
							"total_fields": []
					},
					"value": {
							"rows": [
									{
											"1": "N/A"
									}
							],
							"totals": {}
					}
			},
			{
					id: "FW1DOgPgC",
					title: "Seleccione la fecha",
					subtitle: "",
					widget_type: "DATE_FIELD",
					value: "2022-12-22T00:00:00.000Z"
			},
			{
					id: "FWInAVzSX",
					title: "Notas",
					subtitle: "",
					widget_type: "TEXT_PARAGRAPH",
					value: ""
			},
			{
					id: "FWfpmUAIT",
					title: "Campo Parrafo",
					subtitle: "Complete las observaciones",
					widget_type: "TEXT_PARAGRAPH",
					value: "valor por default"
			},
			{
					id: "FWOkvrwnO",
					title: "Firma",
					subtitle: "firma digital",
					widget_type: "SIGNATURE_FIELD",
					value: null
			},
			{
					id: "FWxY4lsw2",
					title: "Imagen check Deposito",
					subtitle: "Imagen",
					widget_type: "IMAGE_FIELD",
					value: null
			}
	]
}

export const responseForms:FormsResponse[] = [
	{
		id: '3421',
		created: '2022-12-19T14:01:23.552Z',
	},
	{
		id: '3246',
		created: '2022-12-18T14:01:23.552Z',
	},
	{
		id: '3491',
		created: '2022-12-17T14:01:23.552Z',
	},
	{
		id: '32451',
		created: '2022-12-10T12:01:23.552Z',
	}
];
