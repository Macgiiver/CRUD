# MyCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## para iniciar el proyecto primero ejecutar el comando 
npm install
## esto permitira descargar e isntalar todas las librerias del poryecto para poder iniciar

## para iniciar el proyecto usar el siguiente comando
ng serve
## en caso de que tengas ya algun proyecto de angular ejecutado y usando el puerto 4200 puedes usar este comando ng serve --port 4201

## para este proyecto usamos una API desde este sitio web https://crudcrud.com donde se genera parte de la segmentacion de la url par aconsumir ejemplo
https://crudcrud.com/api/86133da6af544b8fb88335d9464dccd2
## debido a que es Free solo cuenta con un limite de 100 peticiones en una duracion de 24 horas 
## en caso de que la api no responda porque se supero el limite de peticiones o de las 24 se puede generar otra url desde el sitio web oficial y reemplazar en el enviorement
apiKey: '86133da6af544b8fb88335d9464dccd2'
## cuando se reemplace esa valor para poder consumir el endpoint, pero recordar que cuando se reemplace el valor debes crear los datos en el sitio web comparto el json para lo anteriormencionado
{
  "Id": 4,
  "Nombre": "Luis",
  "Edad": 22,
  "CorreoElectronico": "luis@example.com",
  "Direccion": {
    "Calle": "",
    "Numero": "",
    "Ciudad": "",
    "Pais": ""
  },
  "Telefono": "58962369",
  "Ocupacion": "Programador",
  "Intereses": [
    "",
    "",
    ""
  ]
}
## esto es debido a que el sitio web almacena estos datos para realizar los proceso del ejercicio ya que ellos no ofrecen datos instananeos
## se comparte collection de postman
{
	"info": {
		"_postman_id": "c500b6d9-aa63-4f54-a0d0-41979d0887df",
		"name": "Rest API CRUD",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11664860",
		"_collection_link": "https://www.postman.com/lorddenihol/workspace/clase-de-programacion/collection/7307315-c500b6d9-aa63-4f54-a0d0-41979d0887df?action=share&source=collection_link&creator=11664860"
	},
	"item": [
		{
			"name": "GetAllUsers",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{path}}{{project}}/users",
					"host": [
						"{{path}}{{project}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "GetUserById",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{path}}{{project}}/users/667daf5719f3e403e81e42f9",
					"host": [
						"{{path}}{{project}}"
					],
					"path": [
						"users",
						"667daf5719f3e403e81e42f9"
					]
				}
			},
			"response": []
		},
		{
			"name": "CreateUsers",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"Id\": 4,\r\n    \"Nombre\": \"Ana González\",\r\n    \"Edad\": 35,\r\n    \"CorreoElectronico\": \"ana.gonzalez@example.com\",\r\n    \"Direccion\": {\r\n        \"Calle\": \"Calle del Sol\",\r\n        \"Numero\": 321,\r\n        \"Ciudad\": \"Valencia\",\r\n        \"Pais\": \"España\"\r\n    },\r\n    \"Telefono\": \"+34 600 321 987\",\r\n    \"Ocupacion\": \"Abogada\",\r\n    \"Intereses\": [\r\n        \"Derecho\",\r\n        \"Teatro\",\r\n        \"Cocina\"\r\n    ]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{path}}{{project}}/users",
					"host": [
						"{{path}}{{project}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "UpdateUsers",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"Id\": 3,\r\n    \"Nombre\": \"Carlos Martínez PEDRAZA\",\r\n    \"Edad\": 40,\r\n    \"CorreoElectronico\": \"carlos.martinez@example.com\",\r\n    \"Direccion\": {\r\n        \"Calle\": \"Paseo de la Reforma\",\r\n        \"Numero\": 789,\r\n        \"Ciudad\": \"Sevilla\",\r\n        \"Pais\": \"España\"\r\n    },\r\n    \"Telefono\": \"+34 600 987 654\",\r\n    \"Ocupacion\": \"Doctor\",\r\n    \"Intereses\": [\r\n        \"Medicina\",\r\n        \"Ciclismo\",\r\n        \"Música\"\r\n    ]\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{path}}{{project}}/users/667daf5719f3e403e81e42f9",
					"host": [
						"{{path}}{{project}}"
					],
					"path": [
						"users",
						"667daf5719f3e403e81e42f9"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Users",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{path}}{{project}}/users/667daf5719f3e403e81e42f9",
					"host": [
						"{{path}}{{project}}"
					],
					"path": [
						"users",
						"667daf5719f3e403e81e42f9"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "path",
			"value": "https://crudcrud.com/api/",
			"type": "string"
		},
		{
			"key": "project",
			"value": "71203c3c3d7142649ccb4e2bc33a13a3",
			"type": "string"
		}
	]
}